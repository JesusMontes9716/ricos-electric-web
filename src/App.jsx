import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import UserReviews from "./components/UserReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";

import "./styles/main.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <UserReviews />
        <Contact />
      </main>

      <Footer />
      <FloatingCall />
    </>
  );
}
