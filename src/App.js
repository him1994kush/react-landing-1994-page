import React from 'react';
import About from './Components/About';
import Banner from './Components/Banner';
import Copyright from './Components/Copyright';
import Developers from './Components/Developers';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Products2 from './Components/Products2';
import Services from './Components/Services';
import './index.css';


function App() {
  return (
    <div className="App">
    <Header/>
     <Navbar/>
     <Banner/>
     <Products2/>
     <Services/> 
     <Portfolio/>
     <Developers/>
     <About/>
     <Footer/>
     <Copyright/>
    </div>
  );
}

export default App;
