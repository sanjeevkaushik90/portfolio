import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Project from "./component/project";
import Experience from "./component/experience";
import Education from "./component/education";
import Skill from "./component/skill";
import Footer from "./component/footer";

function App() {
  return (
    <div className="bg-[#1a1a1a]">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skill />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Project />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Contact Section (Footer acts as contact) */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;