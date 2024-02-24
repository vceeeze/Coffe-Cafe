import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/Services/Services';
import Banner from './components/banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App