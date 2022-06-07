import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import About from "./About";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacts from "./components/Contacts/Contacts";


function App() {

  return (
    <div style={{padding: '10px 30px'}}>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Articles/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/contacts" element={<Contacts/>}>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
