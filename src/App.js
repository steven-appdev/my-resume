import './App.css';
import 'animate.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home';
import Academic from './pages/academic';
import Experience from './pages/experience';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar className="z-50"/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='academic' element={<Academic/>}/>
          <Route path='experiences' element={<Experience/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;