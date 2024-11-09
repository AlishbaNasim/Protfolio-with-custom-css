import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "./about/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Contact from "./contact/page";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}
