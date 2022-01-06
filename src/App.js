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
  // const goTo = () => {
  //   myref.current.scrollIntoView();
  // };
  return (
    <div>
      <Home myref={homeref} />
      <About myref={aboutref} />
      <Projects myref={projectsref} />
      <Contacts myref={contactsref} />
    </div>
  );
}
