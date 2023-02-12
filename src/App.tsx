import { useState, useEffect } from "react";

import ContactContainer from "./components/contact/ContactContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeContainer from "./components/home/HomeContainer";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import SkillsContainer from "./components/skills/SkillsContainer";

const App = () => {
  const [ sectionId, setSectionId ] = useState<string | undefined>(window.location.href.split("#")[1]);

  useEffect(() => {
    setSectionId(window.location.href.split("#")[1]);
  }, [window.location.href])

  return (
    <>
      <Header sectionId={sectionId} />
      <HomeContainer setSectionId={setSectionId} />
      <ProjectsContainer setSectionId={setSectionId} />
      <SkillsContainer setSectionId={setSectionId} />
      <ContactContainer setSectionId={setSectionId} />
      <Footer />
    </>
  );
}

export default App;