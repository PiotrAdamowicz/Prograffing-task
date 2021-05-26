import "./styles/App.scss";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Service from "./components/layout/Service";
import Team from "./components/layout/Team";
import Pricing from "./components/layout/Pricing";
import Faq from "./components/layout/Faq";
import Contact from "./components/layout/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Service />
      <Team />
      <Pricing />
      <Faq />
      <Contact />
      <section id="bottomNav" className="bottomNav">
        BOttom Nav
      </section>
      <Footer />
    </div>
  );
}

export default App;
