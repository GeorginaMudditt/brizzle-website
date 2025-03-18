import "./App.css";
import Georgina from "./Georgina";
import Header from "./Header";
import Offerings from "./Offerings";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Offerings />
      <Georgina />
      <Footer />
    </div>
  );
}
