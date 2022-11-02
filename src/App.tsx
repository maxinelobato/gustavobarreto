import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Footer } from "./components/sections/Footer";
import { GoogleMaps } from "./components/sections/GoogleMaps";
import { Gustavo } from "./components/sections/Gustavo";
import { HelpUs } from "./components/sections/HelpUs";
import { Specialty } from "./components/sections/Specialtys";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Specialty />
      <HelpUs />
      <Gustavo />
      <Footer />
      <GoogleMaps />
    </>
  );
}

export default App;
