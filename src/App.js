import { useState } from "react";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import SideBar from "./components/Sidebar";

export default function App() {
  const [isOpen, setOpen] = useState(false);

  const toggleHam = () => setOpen(!isOpen);

  return (
    <div className="App">
      <SideBar isOpen={isOpen} setOpen={setOpen} toggleHam={toggleHam} />
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
