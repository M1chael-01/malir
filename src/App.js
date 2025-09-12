import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Impressive from "./Components/Impresive";
import Help from "./Components/Help";
import CompletedWork from "./Components/CompledWork";
import CTAVisitingCard from "./Components/CTAVisitingCard";
import Blog from "./Components/Blog";
import References from "./Components/References";
import WhereWeWork from "./Components/WhereWeWork";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // délka animace v ms
      once: true, // spustí se jen jednou
    });
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <Impressive/>
      <Help/>
      <CompletedWork/>
      <CTAVisitingCard/>
      <Blog/>
      <References/>
      <WhereWeWork/>
      <Footer/>
    </>
  )
}

export default App;
