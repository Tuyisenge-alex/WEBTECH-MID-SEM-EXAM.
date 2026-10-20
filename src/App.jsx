import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Events from "./components/Events";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home">
      <Header />
      <Navbar />
      <main>
        <Introduction />
        <Services />
        <Events />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
