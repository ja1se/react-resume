import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
      <div className="app container">
        <Nav />
        <Hero />
        <main>
          <AboutMe />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}
