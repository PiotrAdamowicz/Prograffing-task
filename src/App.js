import "./styles/App.scss";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Service from "./components/layout/Service";
import Team from "./components/layout/Team";
import Pricing from "./components/layout/Pricing";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Service />
      <Team />
      <Pricing />
      <section id="faq" className="faq">
        Faq
      </section>
      <section id="contact" className="contact">
        Contact Us
      </section>
      <section id="bottomNav" className="bottomNav">
        BOttom Nav
      </section>
      <Footer />
    </div>
  );
}

export default App;
