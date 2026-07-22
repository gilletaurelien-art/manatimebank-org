// Vitrine de marque du hero : le logo letterpress MANAtimebank présenté
// comme une plaque imprimée, avec la carte MANA × TEMPOsystem posée en décor.
// Registre chaud (or / crème) posé sur la page froide — un objet tactile.

export default function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-hidden="true">
      {/* halo doré chaud pour ancrer le crème sur la page froide */}
      <div className="hero-showcase-glow" />

      {/* logo lockup — plaque imprimée au premier plan */}
      <figure className="hero-card hero-card-front">
        <img
          src="/assets/manatimebank-logo.jpeg"
          alt="Logo MANAtimebank, spirale dorée gravée"
        />
      </figure>

      {/* éclats discrets */}
      <span className="hero-spark hero-spark-a" />
      <span className="hero-spark hero-spark-b" />
    </div>
  );
}
