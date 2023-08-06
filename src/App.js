import React  from 'react';
import {BrowserRouter  as Router,Routes,Route} from  'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './Pages/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {

return (
  
<div className='App'>

<main>

<Router>
  <Navbar/>
 <Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route  exact path='/about/' element={<About/>}></Route>
  <Route  path='/projects/' element={<Projects/>}></Route>
  <Route  path='/blogs/' element={<Blogs/>}></Route>
  <Route  path='/contact/' element={<Contact/>}></Route>
 </Routes>

 <Footer/>

 </Router>
</main>
</div>
   
  )
}

export default App; 