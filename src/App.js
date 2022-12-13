import "./App.css";
import About from "./components/content/about";
import Contact from "./components/content/contact";
import Education from "./components/content/education";
import Home from "./components/content/home";
import Project from "./components/content/project";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
