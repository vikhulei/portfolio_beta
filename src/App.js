import { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import SideBar from "./components/Sidebar";

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
      <SideBar />
      <div id="home" />
      <Home />
      <div id="about" />
      <About />
      <div id="projects" />
      <Projects />
      <div id="contacts" />
      <Contacts />
    </div>
  );
}
