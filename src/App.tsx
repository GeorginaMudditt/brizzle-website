import "./App.css";
import Header from "./Header";
import Offerings from "./Offerings";
import Footer from "./Footer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import KidsPage from "./pages/KidsPage";
import AdultsPage from "./pages/AdultsPage";
import OnlinePage from "./pages/OnlinePage";
import ApplicationPage from "./pages/ApplicationPage";
import ProfilePage from "./pages/ProfilePage";
import FAQPage from "./pages/FAQPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
        <ModalRenderer />
      </div>
    </Router>
  );
}

function MainContent() {
  return <Offerings />;
}

function ModalRenderer() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/kids" && <KidsPage />}
      {location.pathname === "/adults" && <AdultsPage />}
      {location.pathname === "/online" && <OnlinePage />}
      {location.pathname === "/application" && <ApplicationPage />}
      {location.pathname === "/profile" && <ProfilePage />}
      {location.pathname === "/faq" && <FAQPage />}
    </>
  );
}
