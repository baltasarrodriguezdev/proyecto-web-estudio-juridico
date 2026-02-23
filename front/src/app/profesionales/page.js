"use client";

import { Nav } from "../components/nav";
import Profesionals from "../components/professionals";
import { Abogados } from "../data/abogados";
import Footer from "../components/footer";
import { contactoInfo } from "../data/contactInfo";
export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Profesionals profesionales={Abogados} ></Profesionals>
      <Footer info={contactoInfo}></Footer>
    </div>
  );
}
