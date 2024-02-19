import { useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SmoothScroll from "./components/SmoothScroll";
import {motion, useMotionValue, useSpring} from 'framer-motion';
import Products from "./components/Products";
import Price from "./components/Price";



function App() {

  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = {damping: 40, stiffness: 300, mass: 0.5};

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };


  const manageMouseMove = (e) => {
    const {clientX, clientY} = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);

  }

  useEffect(() => {
     window.addEventListener('mousemove', manageMouseMove);


     return () => {
      window.removeEventListener('mousemove', manageMouseMove);
     }
  }, [])
  
 


  return (

    <div className="App">
      <SmoothScroll>
      <Header />
      <Hero />
      <About />
      <Products />
      <Price />
      </SmoothScroll>
    

    <motion.div style={{left: smoothMouse.x, top: smoothMouse.y}} className="cursor"></motion.div>

    </div>

  );
}

export default App;
