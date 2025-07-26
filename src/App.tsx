import "./App.css";
import Header from "./Header";
import Offerings from "./Offerings";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import KidsPage from "./pages/KidsPage";
import AdultsPage from "./pages/AdultsPage";
import BooksPage from "./pages/BooksPage";
import ApplicationPage from "./pages/ApplicationPage";
import ProfilePage from "./pages/ProfilePage";
import FAQPage from "./pages/FAQPage";
import WelcomePage from "./pages/WelcomePage";
import GiftVoucher from "./GiftVoucher";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/auth/bienvenue" element={<WelcomePage />} />
          <Route path="*" element={<MainContentWithModals />} />
        </Routes>
        <GiftVoucher />
        <Footer />
      </div>
    </Router>
  );
}

function MainContentWithModals() {
  return (
    <>
      <Offerings />
      <ModalRenderer />
    </>
  );
}

function ModalRenderer() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/kids" && <KidsPage />}
      {location.pathname === "/adults" && <AdultsPage />}
      {location.pathname === "/books" && <BooksPage />}
      {location.pathname === "/application" && <ApplicationPage />}
      {location.pathname === "/profile" && <ProfilePage />}
      {location.pathname === "/faq" && <FAQPage />}
    </>
  );
}
