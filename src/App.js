import "./App.css";
import "animate.css";
import {Routes,Route,HashRouter} from "react-router-dom";
import Home from "./pages/home";
import Academic from "./pages/academic";
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
            <Route path="/technical" element={<Technical/>}/>
            <Route path="/projects" element={<Project/>}/>
          </Routes>
        </main>
        <footer className="bg-gray-800 mt-20">
          <p className="py-2 mx-10 font-medium text-center text-white">This website is developed and belong to Tan Teck Xun. All rights reserved © 2023.</p>
        </footer>
    </HashRouter>
  );
}

export default App;