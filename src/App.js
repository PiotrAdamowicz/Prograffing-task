import "./styles/App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <section id="service" className="service">
        Service
      </section>
      <section id="team" className="team">
        Our Team
      </section>
      <section id="pricing" className="pricing">
        Pricing
      </section>
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
