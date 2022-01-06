import { useRef } from "react";

import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

export default function App() {
  const myref = useRef();
  const goTo = () => myref.current.scrollIntoView();
  return (
    <div className="App">
      <button onClick={goTo}>Click on me</button>
      <Home />
      <About />
      <Projects />
      {/* <div ref={myref}>Hello</div> */}
      <Contacts myref={myref} />
    </div>
  );
}
