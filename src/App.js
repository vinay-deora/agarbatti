import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Middle2 from './components/Middle2';
import {Routes ,Route} from "react-router-dom";
import About from './components/About';
function App() {
  return (
   <>
    <Navbar />
    {/* <Body/> */}
    
 
       

<Routes>  
    <Route exact path='/' element={< Body/>}></Route>  
    <Route path='/about' element={< About />}></Route>  
</Routes>
<Footer/>

   </>
  );
}

export default App;
