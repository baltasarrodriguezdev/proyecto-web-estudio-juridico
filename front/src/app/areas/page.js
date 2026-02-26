import { Nav } from "../components/nav";
import Footer from "../components/footer";
import { contactoInfo } from "../data/contactInfo";

export const dynamic = "force-dynamic";

async function getAreas() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/areas`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.log("API /areas error:", res.status);
      return [];
    }

    const text = await res.text();
    if (!text) return [];

    return JSON.parse(text);
  } catch (err) {
    console.log("Fetch /areas failed:", err);
    return [];
  }
}

export default async function Home() {
  const data = await getAreas();

  return (
    <div>
      <Nav />
      <section className="w-full bg-amber-50 py-16">
        <div className="w-full">
          <div className="flex flex-col px-6 justify-center items-center my-5 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-[#0F1E2E]">
  Áreas de Práctica
</h2>
            <p className="mt-4 max-w-md leading-6 text-[#0F1E2E]/80 font-serif">
              Ofrecemos servicios especializados en múltiples áreas del derecho para cubrir todas sus necesidades legales.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            {Array.isArray(data) && data.map((a) => (
              <div
                key={a.id_area}
                className="bg-[#ffffff] shadow-md shadow-black/40 p-5 mx-10 my-5 w-80 h-40 flex flex-col items-center rounded-md hover:scale-105 hover:shadow-2xl transition-all duration-200 ease-in-out"
              >
                <div className="w-9 h-1 bg-[#F5C518]"></div>
                <h2 className="font-serif text-[#0F1E2E] text-xl mt-3">{a.nombre}</h2>
                <p className="text-center mt-4 max-w-sm text-sm leading-6 text-[#514d4d] font-serif">
                  {a.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer info={contactoInfo} />
    </div>
  );
}