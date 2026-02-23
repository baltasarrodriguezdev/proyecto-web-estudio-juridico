"use client";
import { Nav } from "./components/nav";
import Hero from "./components/hero";
import { contactoInfo } from "./data/contactInfo";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero />
      <Footer info={contactoInfo}></Footer>
    </main>
    
  );
}
