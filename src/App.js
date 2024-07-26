import "./App.css";
import "animate.css";
import {Routes,Route,HashRouter} from "react-router-dom";
import Home from "./pages/home";
import Academic from "./pages/academic";
import Work from "./pages/work";
import Technical from "./pages/technical";
import Navbar from "./components/navbar";
import Project from "./pages/project";

function App() {
  return (
    <HashRouter>
        <Navbar/>
        <main className="p-[50px]">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/my-resume" element={<Home/>}/>
            <Route path="/academic" element={<Academic/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/technical" element={<Technical/>}/>
            <Route path="/projects" element={<Project/>}/>
          </Routes>
        </main>
    </HashRouter>
  );
}

export default App;