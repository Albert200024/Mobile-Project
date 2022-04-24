import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Producte from './Components/Producte';
import Contact from './Components/Contact';
import ProductDetali from './Components/ProductDetali';
import {Routes,Route, Redirect} from 'react-router-dom'
import Cart from './Components/Cart';
import Chekout from './Components/Chekout';

function App() {
  return (
    <>
       <Header/>
       <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/products" element = {<Producte/>}/>
            <Route path="/products/:id" element = {<ProductDetali/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/> 
            <Route path="/checkout" element = {<Chekout/>}/> 
            <Route path='/cart' element={<Cart/>}/>
       </Routes>
       <Footer/>
    </>
  );
}

export default App;
 