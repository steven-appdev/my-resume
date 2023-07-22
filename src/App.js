import './App.css';
import 'animate.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './pages/home';
import Academic from './pages/academic';


function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen'>
        <nav className='flex bg-black p-4 header'>
          <h1 className='font-bold px-10'><Link to='/'>Steven Resume</Link></h1>
          <ul className='flex grow justify-end'>
            <li className='px-10 font-bold underline underline-offset-8'><Link to='/'>Home</Link></li>
            <li className='px-10'><Link to='academic'>Academic History</Link></li>
            <li className='px-10'><Link to='project'>My Project</Link></li>
            <li className='px-10'><Link to='contact'>Contact</Link></li>
            <li className='px-10'><Link to='credits'>Credits</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='academic' element={<Academic/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;