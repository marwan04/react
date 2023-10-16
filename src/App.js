import './App.css';
import Header from './header'
import {
  BrowserRouter,
  Route,
  Routes /* useNavigate */,
} from "react-router-dom";
import Main from './main.js'
import Nav from './nav'






function App() {
  return (
 <div>
  <BrowserRouter>
          <div>
            <Nav></Nav>
            <Routes>
            <Route path="/" element={<Header/>}></Route>
              <Route path="/main" element={<Main/>}></Route>
              
           
            </Routes>
        
          </div>
      </BrowserRouter>  
      


      
 </div>

 
  );
}

export default App;
