import { Nav } from "../components/nav";
import Profesionals from "../components/professionals";
import Footer from "../components/footer";
import { contactoInfo } from "../data/contactInfo";

export const dynamic = "force-dynamic"; // evita que intente prerender estático

async function getProfesionales() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/profesionales`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.log("API /profesionales error:", res.status);
      return [];
    }

    // por si viene vacío
    const text = await res.text();
    if (!text) return [];

    return JSON.parse(text);
  } catch (err) {
    console.log("Fetch /profesionales failed:", err);
    return [];
  }
}

export default async function Home() {
  const data = await getProfesionales();

  return (
    <div>
      <Nav />
      <Profesionals profesionales={data} />
      <Footer info={contactoInfo} />
    </div>
  );
}