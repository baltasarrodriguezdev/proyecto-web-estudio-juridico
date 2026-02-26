import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[url('/assets/img/fondo.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="font-zenitha text-5xl tracking-wide text-[#f3f3f3] drop-shadow-sm">
          Alvarez y Robles
        </h1>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white/80 font-serif">
          Con más de 25 años de experiencia, brindamos asesoría jurídica
          integral y soluciones estratégicas adaptadas a sus necesidades.
        </p>

        <div className="mt-7 flex flex-col gap-3 w-full max-w-sm">
          <Link href="/contacto" className="w-full">
  <button
    className="w-full rounded-md px-5 py-3 font-serif text-base
    bg-[#ffd700] text-[#1b1b1b] shadow-md shadow-black/30">
    Contactanos
  </button>
</Link>

<Link href="/study" className="w-full">
  <button
    className="w-full rounded-md px-5 py-3 font-serif text-base
    border border-white/70 text-white bg-white/5 backdrop-blur-[2px]">
    Conocer Más
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}
