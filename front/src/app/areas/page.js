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
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-[#0F1E2E]">
              Áreas de Práctica
            </h2>

            <p className="mt-4 max-w-md leading-6 text-[#0F1E2E]/80 font-serif">
              Ofrecemos servicios especializados en múltiples áreas del derecho
              para cubrir todas sus necesidades legales.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(data) &&
              data.map((a) => (
                <div
                  key={a.id_area}
                  className="bg-white rounded-md shadow-md shadow-black/30 p-7 text-center
                             hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-in-out"
                >
                  {/* Barrita amarilla: siempre visible */}
                  <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#F5C518]" />

                  <h3 className="font-serif text-[#0F1E2E] text-2xl leading-tight">
                    {a.nombre}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#514d4d] font-serif">
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