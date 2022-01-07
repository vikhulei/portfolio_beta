import { useRef } from "react";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

export default function App() {
  const [homeref, aboutref, projectsref, contactsref] = [
    useRef(),
    useRef(),
    useRef(),
    useRef()
  ];

  const goHome = () => {
    homeref.current.scrollIntoView();
  };
  const goAbout = () => {
    aboutref.current.scrollIntoView();
  };
  const goProjects = () => {
    projectsref.current.scrollIntoView();
  };
  const goContacts = () => {
    contactsref.current.scrollIntoView();
  };

  return (
    <div className="App">
      <div ref={homeref} />
      <Home />
      <div ref={aboutref} />
      <About />
      <div ref={projectsref} />
      <Projects />
      <div ref={contactsref} />
      <Contacts />
    </div>
  );
}
