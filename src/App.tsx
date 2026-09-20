import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Service";
import Plans from "./components/sections/Plans";
import Trainers from "./components/sections/Trainers";
import Testimonials from "./components/sections/Testimonials";
import Schedule from "./components/sections/Schedule";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Plans />
        <Trainers />
        <Testimonials />
        <Schedule />
      </main>
      
      <Footer />
    </>
  );
}

export default App;