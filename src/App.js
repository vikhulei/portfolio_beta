import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}
