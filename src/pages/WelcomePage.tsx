import "../RedirectedFromApp.css";

const WelcomePage = () => {
  return (
    <div className="WelcomePage">
      <h1>Félicitations 🎉 Compte créé 😊</h1>
      <h2>
        Vous avez créé un compte avec succès sur l'application mobile de
        Brizzle.
      </h2>
      <h2>
        Nous espérons que vous apprécierez l'application et nous vous souhaitons
        bonne chance pour gagner vos icônes !
      </h2>
      <p>
        N'hésitez pas à nous contacter pour toute remarque concernant
        l'application :{" "}
        <a href="mailto:hello@brizzle-english.com">hello@brizzle-english.com</a>
      </p>
    </div>
  );
};

export default WelcomePage;
