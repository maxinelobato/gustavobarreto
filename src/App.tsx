import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { HelpUs } from "./components/sections/HelpUs";
import { Specialty } from "./components/sections/Specialtys";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Specialty />
      <HelpUs />
    </>
  );
}

export default App;
