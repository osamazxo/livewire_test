import BookTrip from "./BookTrip";
import Destinations from "./Destinations";
import Footer from "./Footer";
import Hero from "./Hero";
import Logos from "./Logos";
import Services from "./Services";
import Subscripe from "./Subscripe";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <div className="landing-page text-[16em]">
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Logos />
      <Subscripe />
      <Footer />
    </div>
  );
};

export default LandingPage;
