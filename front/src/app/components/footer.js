export default function Footer({ info }) {
  return (
    <footer className="w-full bg-[#192531] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.id}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-6 w-6 text-[#F5C518]" />
                </div>

                <h4 className="font-serif text-sm uppercase tracking-widest text-white/70">
                  {i.label}
                </h4>

                <p className="font-serif text-sm leading-6 text-white/90">
                  {i.value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="my-10 h-px w-full bg-white/10" />
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
          <p className="font-serif text-sm text-white/60">
            © {new Date().getFullYear()} Alvarez y Robles · Estudio Jurídico
          </p>

          <p className="font-serif text-sm text-white/60">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
