import "./GiftVoucher.css";

export default function GiftVoucher() {
  return (
    <div className="GiftVoucher">
      <h2>Offrez un bon cadeau</h2>
      <p>
        Offrez à un être cher le plaisir d'apprendre : achetez un cours
        d'anglais pour un ami ou un membre de votre famille ! Bons cadeaux
        disponibles de 20 € à 100 €.
      </p>
      <a
        href="https://giftup.app/place-order/56ec5784-7738-48b4-86d3-08dda9a870cc?platform=hosted"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">Achetez un bon cadeau</button>
      </a>
    </div>
  );
}
