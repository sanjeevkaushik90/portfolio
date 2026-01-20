import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Project from "./component/project";
import Experience from "./component/experience";
import Education from "./component/education";
import Skill from "./component/skill";
import Footer from "./component/footer";  


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Project />
      <Experience />
      <Education />
      <Footer /> 
    </div>
  );
}

export default App;
