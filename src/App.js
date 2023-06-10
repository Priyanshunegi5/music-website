import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About"
import './App.css';
import Samples from "./components/Samples/Samples";
import Contact from "./components/Contact/Contact"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Page from "./Layouts/Page" 
function App() {
  return (
//</>
<BrowserRouter><Page>
      <Routes>
      
          <Route path='About'  element={<About />} />
          <Route path="Samples" element={<Samples/>}/>
          <Route path="contact" element={<Contact />} />

      </Routes></Page>
    </BrowserRouter>
  );
}

export default App;
