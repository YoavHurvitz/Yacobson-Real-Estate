import Hero from './components/Hero';
import Properties from './components/Properties';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import CTAForm from './components/CTAForm';
import Reviews from './components/Reviews';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] overflow-hidden">
      <Hero />
      <Properties />
      <AboutUs />
      <CTAForm id="contact" />
      <WhyUs />
      <Reviews />
      <Team />
      <CTAForm />
      <FAQ />
      <Footer />
    </main>
  );
}



