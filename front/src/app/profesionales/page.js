import { Nav } from "../components/nav";
import Profesionals from "../components/professionals";
import { Abogados } from "../data/abogados";
import Footer from "../components/footer";
import { contactoInfo } from "../data/contactInfo";
export default async function Home() {
  const backUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/profesionales`
      );
      const data = await res.json();
  return (
    <div>
      <Nav></Nav>
      <Profesionals profesionales={data} ></Profesionals>
      <Footer info={contactoInfo}></Footer>
    </div>
  );
}
