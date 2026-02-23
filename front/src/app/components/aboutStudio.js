export default function AboutStudio() {
  return (
    <section className="w-full bg-[#0f1e2e]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-10">

            {/* Título de sección */}
            <div className="flex items-center gap-4">
              <p className="font-serif text-xs tracking-widest text-white/60 uppercase">
                El Estudio
              </p>
              <span className="h-px w-16 bg-white/20" />
            </div>

            <h2 className="font-serif text-3xl leading-tight tracking-wide text-white drop-shadow-sm sm:text-4xl">
              Un compromiso con la Justicia y la Excelencia
            </h2>

            <div className="max-w-prose flex flex-col gap-5">
              <p className="font-serif text-sm leading-7 text-[#908686] sm:text-base">
                Somos un estudio jurídico fundado con la visión de proporcionar servicios legales de la más alta
                calidad, combinando experiencia profesional con un enfoque personalizado y cercano a nuestros clientes.
              </p>

              <p className="font-serif text-sm leading-7 text-[#908686] sm:text-base">
                Nuestro equipo está integrado por abogados especializados en distintas ramas del derecho, lo que nos
                permite ofrecer asesoría integral y soluciones efectivas para cada situación legal.
              </p>
            </div>

          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30">
              <img
                src="/assets/img/about.png"
                alt="Oficina del estudio jurídico"
                className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px]"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
