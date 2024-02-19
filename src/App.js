import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SmoothScroll from "./components/SmoothScroll";



function App() {
 


  return (

    <div className="App">
      <SmoothScroll>
      <Header />
      <Hero />
      <About />
      </SmoothScroll>
    

    </div>

  );
}

export default App;
