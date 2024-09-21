import Footer from "../../components/footer";
import Header from "../../components/Header";
import Main from "../../components/home";
import Skills from "../../components/skills";
import Licenses from "../../components/certification";
import Projects from "../../components/project";
import Contact from "../../components/contact";
import Experience from "../../components/experience";
export default function Home() {
  return (
    <div>
      <Header/>
      <div id="home">
          <Main/>
      </div>
      <div id="skills">
          <Skills/>
      </div>
      <div id="projects">
          <Projects/>
      </div>
      <div id="experience">
          <Experience/>
      </div>
      <div id="certificate">
          <Licenses/>
      </div>
      <div id="contact">
          <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
