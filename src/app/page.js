import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Offers from '../../components/Offers';
import UseCases from '../../components/UseCases';
import Testimonials from '../../components/Testimonials';
import Team from '../../components/Team';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Offers />
        <UseCases />
        <Testimonials />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
