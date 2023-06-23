import './App.css'
import Navbar from './Components/Navbar'
import Middle from './Components/Middle'
import Footer from './Components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import About from './Components/About';
import Resume from './Components/Resume';

function App() {
  return (
    <div class="app" id="scrollBar">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Middle/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
