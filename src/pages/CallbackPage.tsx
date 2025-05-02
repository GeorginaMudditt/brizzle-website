import { useEffect } from "react";

const CallbackPage = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");

    if (access_token && refresh_token) {
      // Construct deep link into app
      const deepLink = `myapp://auth/callback#access_token=${access_token}&refresh_token=${refresh_token}`;
      window.location.href = deepLink;
    } else {
      console.error("Tokens not found in URL.");
    }
  }, []);

  return (
    <p style={{ marginLeft: "2rem", fontSize: "1.5rem" }}>
      Vérification de votre adresse e-mail ...
    </p>
  );
};

export default CallbackPage;
