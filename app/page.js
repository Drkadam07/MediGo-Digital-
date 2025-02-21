import Hero from "./home/page";
import About from "./about/page";
import Services from "./services/page";
import HealthcareSpecialists from "./industries/page";
import FAQSection from "./Components/FAQSection";
import Contact from "./contactus/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About/>
        <Services/>
        <HealthcareSpecialists/>
        <FAQSection/>
        <Contact/>
      </main>
    </div>
  );
}
