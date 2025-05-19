import "../RedirectedFromApp.css";
import Logo from "../assets/brizzle-insta-square.png";

const WelcomePage = () => {
  return (
    <div className="WelcomePage">
      <img
        src={Logo}
        alt="Brizzle Logo"
        className="WelcomePage__logo"
        width={150}
        height={150}
        style={{ borderRadius: 100, marginBottom: 20 }}
      />
      <h1>Félicitations 🎉 Compte créé 😊</h1>
      <h2>
        Vous avez créé un compte avec succès sur l'application mobile de
        Brizzle.
      </h2>
      <h2>Vous pouvez maintenant vous connecter à l’application.</h2>
      <p>
        Nous espérons que vous apprécierez l'application et nous vous souhaitons
        bonne chance pour gagner vos icônes !
      </p>
      <p>
        N'hésitez pas à nous contacter pour toute remarque concernant
        l'application :{" "}
        <a href="mailto:hello@brizzle-english.com">hello@brizzle-english.com</a>
      </p>
    </div>
  );
};

export default WelcomePage;
