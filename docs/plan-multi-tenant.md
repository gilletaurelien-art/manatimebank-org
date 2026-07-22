# Plan — Multi-tenant MANAtimebank

> Objectif : transformer « Créer votre espace temps » d'une **réservation d'espace**
> en un **produit livré** : chaque organisation obtient une banque de temps réelle,
> utilisable, à son adresse (`‹slug›.manatimebank.org` ou domaine propre).
>
> Statut : brouillon de conception. Décisions à valider avant chantier.
> Rédigé le 2026-07-22.

---

## 1. État actuel (ce qui existe déjà)

- **Vitrine** `manatimebank.org` (Vite/React) — le formulaire « Créer votre espace temps »
  est **masqué** pour le moment ; seul le **formulaire de contact** reste actif.
- **Control plane** minimal (projet Supabase dédié `qpwjtxvnuhbbwdqodrlh`, schéma `mtb`) :
  - `mtb.spaces` (slug unique, org, taille…) + `mtb.space_members` (owner), RLS fail-closed ;
  - RPC `provision_space` (service_role, slug auto-suffixé, idempotente) ;
  - edge function publique `provision-space` (crée/réutilise l'owner GoTrue, insère l'espace,
    génère un lien magique, renvoie le slug).
- **MANA France** (`manafrance-app`) : l'app produit réelle, aujourd'hui **mono-tenant**
  (une base, une communauté). C'est elle qu'il faut rendre multi-tenant.

**Ce qui manque = le cœur du chantier** : servir, derrière chaque espace enregistré,
une application isolée et utilisable. Le control plane *réserve* ; il ne *livre* pas.

---

## 2. Décisions d'architecture

### 2.1 Modèle d'isolation des données — 3 options

| Option | Isolation | Coût / complexité | Souveraineté | Verdict |
|---|---|---|---|---|
| **A. Base partagée + `tenant_id` + RLS** | Logique (RLS) | Faible infra, **gros refacto schéma** | Moyenne (données mutualisées) | ✅ **pilote** |
| **B. Schéma Postgres par tenant** (1 base) | Forte (schéma) | Moyenne (provisioning schéma + migrations ×N) | Bonne | ⭐ **cible** |
| **C. Projet Supabase dédié par tenant** | Maximale (base isolée) | Élevée (coût + orchestration) | **Maximale** (résidence dédiée) | 💎 offre premium / souveraine |

**Recommandation : trajectoire A → B, avec C en option d'offre.**
- **A** pour livrer vite un pilote crédible (un déploiement, une base, RLS par `tenant_id`).
- **B** comme cible : isolation par schéma, migrations pilotées, meilleure histoire « résidence des données ».
- **C** vendable en marque blanche « souveraine » (le discours temposystem.eu) aux clients qui l'exigent.

> ⚠️ A et B partagent **le même code applicatif**. Seule la **couche d'accès aux données**
> (résolution du tenant → contexte SQL) change. Concevoir cette couche abstraite dès A
> pour que le passage à B/C ne touche pas l'UI.

### 2.2 Résolution du tenant (routage)

- **Sous-domaine** : `‹slug›.manatimebank.org` → wildcard DNS `*.manatimebank.org` + wildcard TLS.
- **Domaine propre** (offre marque blanche) : CNAME client → vérification + certif auto.
- À l'entrée de l'app : middleware qui lit le host → résout `space` (via `mtb.spaces`) →
  injecte `tenant_id` (option A) ou sélectionne le schéma/projet (B/C) dans le contexte de session.
- Host inconnu → page « espace introuvable » + lien vitrine.

### 2.3 Authentification & identité

- Aligner sur le **Passeport MANA** (SSO « Se connecter avec MANA », cf. écosystème) plutôt que
  des comptes par tenant : **une identité**, appartenance **multi-espaces** (`space_members`).
- À court terme (A) : Supabase Auth partagé + table d'appartenance ; `auth.uid()` + `tenant_id` dans les RLS.
- Rôles par espace : `owner`, `admin`, `member` (déjà amorcé dans `mtb.space_members`).

---

## 3. Chantiers transverses (indépendants de l'option)

1. **Abstraction "tenant context"** — un seul point qui, pour chaque requête, connaît le tenant
   courant et fournit le client de données scoppé. Toute l'app passe par là.
2. **Refacto schéma MANA France** — ajouter `space_id` (FK) à **toutes** les tables métier ;
   réécrire les **RLS** pour filtrer par espace **+** utilisateur ; migrer les données existantes
   de `manafrance-app` vers l'espace « MANA France » (tenant 0).
3. **Provisioning réel** — l'edge `provision-space` doit, au-delà d'insérer la ligne :
   - (A) rien de plus côté données (l'app filtre par `space_id`) ;
   - (B) créer le schéma + jouer les migrations du tenant ;
   - (C) créer le projet + migrations + secrets.
   - puis **notifier** l'owner (voir §4) et exposer l'espace au routage.
4. **Migrations multi-tenant** — pipeline qui applique un changement de schéma à **N** tenants
   (surtout B/C) : versionnage, ordre, rollback, idempotence.
5. **Observabilité par tenant** — logs/quotas/usage rattachés au `space_id` (base de la facturation
   « membres actifs », cf. `pricing`).

---

## 4. Dettes bloquantes à solder (déjà identifiées)

Ces points bloquent une ouverture même en pilote :

- **[SMTP / e-mail]** Le lien magique est *généré* mais **pas envoyé** → brancher **Resend** (ou SMTP)
  pour que l'owner reçoive son accès. **P0.**
- **[Sécurité endpoint public]** `provision-space` crée users+espaces sans captcha ni rate-limit
  (juste un honeypot) → ajouter **hCaptcha/Turnstile** + **rate-limit** avant toute promo. **P0.**
- **[GoTrue `?email=`]** `ensureOwner` s'appuie sur un filtre version-dépendant → valider en prod. **P1.**
- **[DNS/TLS]** wildcard `*.manatimebank.org` + certificats. **P1** (nécessaire dès qu'on sert un sous-domaine).
- **[Nettoyage]** supprimer les lignes de test `espace-test-ci`, `espace-test-ci-2`. **P2.**

---

## 5. Feuille de route par phases

**Phase 0 — Pilote manuel (semaines)**
On garde le formulaire **masqué** ; on ouvre 1–2 espaces **à la main** (config/déploiement dédié
ou base partagée bricolée) pour valider le produit avec de vrais utilisateurs. Zéro self-serve.

**Phase 1 — Multi-tenant base partagée (option A)**
`tenant_id` partout + RLS + résolution par sous-domaine + Passeport/Auth partagé + SMTP + captcha.
Résultat : self-serve réel de bout en bout, un déploiement, données mutualisées.
→ On peut **ré-afficher** « Créer votre espace temps ».

**Phase 2 — Isolation par schéma (option B)**
Provisioning = création de schéma + migrations tenant ; pipeline de migration multi-tenant.
Meilleure isolation + histoire « résidence des données ».

**Phase 3 — Offre souveraine (option C)**
Projet dédié par client premium / marque blanche (discours temposystem.eu) : orchestration,
domaines propres, SLA.

---

## 6. Questions ouvertes (à trancher avant de coder)

- **A d'abord, ou directement B ?** A livre plus vite mais impose un 2ᵉ refacto RLS au passage B.
  Si la « souveraineté » est centrale au discours, viser B tôt peut être plus cohérent.
- **Où vit le code produit ?** On rend `manafrance-app` multi-tenant *en place*, ou on en extrait
  un « moteur » réutilisable ? (impacte tout l'écosystème MANA).
- **Passeport MANA** : disponible à temps, ou auth par tenant en attendant ?
- **Facturation** : brancher la mesure « membres actifs » dès la Phase 1 (quotas/usage par `space_id`).

---

## 7. Prochaine action recommandée

Indépendamment de l'option choisie, **P0 = SMTP + captcha/rate-limit** : peu coûteux, ils rendent
le control plane existant *réellement* utilisable pour un pilote, sans attendre le gros refacto
multi-tenant. Ensuite, prototyper l'**abstraction "tenant context"** (§3.1) sur `manafrance-app`.
