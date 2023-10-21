import './App.css';
import { Home } from './Home';
import { About } from './About';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Sidebar from './Header/Sidebar';

function App() {
                                                                      
  return (
    <BrowserRouter>
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;



