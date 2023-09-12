import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { Parallax } from "@react-spring/parallax";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
  

      <Parallax pages={5} className="scroll">
        <Header />
        <About />
        <Contact />
        <Testimonial />
      <Footer />

      </Parallax>
    </>
  );
}

export default App;
