import { Nav } from "../components/nav";
import Contacto from "../components/contacto";
import Footer from "../components/footer";
import { contactoInfo } from "../data/contactInfo";
export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Contacto></Contacto>
      <Footer info={contactoInfo}></Footer>
    </div>
  );
}

