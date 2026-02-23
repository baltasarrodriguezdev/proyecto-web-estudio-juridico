import Link from "next/link";

export function Register() {
  return (
    <section className="w-full min-h-screen bg-[#0F1E2E]">
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src="/assets/img/logoreall.png" alt="AR"
            className="mx-auto h-20 w-auto"/>
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
            Creá tu cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-white/60">
            Completá tus datos para registrarte.
          </p>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre"
                  className="block text-sm/6 font-medium text-gray-100">
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tino"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/35 focus:outline-2 focus:-outline-offset-2 focus:outline-[#d7bb1a] sm:text-sm/6"/>
                </div>
              </div>
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-sm/6 font-medium text-gray-100">
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    placeholder="Robles"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/35 focus:outline-2 focus:-outline-offset-2 focus:outline-[#d7bb1a] sm:text-sm/6"/>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ejemplo@email.com"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/35 focus:outline-2 focus:-outline-offset-2 focus:outline-[#d7bb1a] sm:text-sm/6"/>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-100">
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/35 focus:outline-2 focus:-outline-offset-2 focus:outline-[#d7bb1a] sm:text-sm/6"/>
              </div>
              <p className="mt-2 text-xs text-white/50">
                Sugerencia: mínimo 8 caracteres.
              </p>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm/6 font-medium text-gray-100">
                Confirmar contraseña
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/35 focus:outline-2 focus:-outline-offset-2 focus:outline-[#d7bb1a] sm:text-sm/6"/>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#d7bb1a] px-3 py-2 text-sm font-semibold text-white hover:bg-[#aa8c1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7bb1a]">
                Registrarme
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-slate-400">
            ¿Ya tenés cuenta?{" "}
            <Link
              href="/login"
              className="font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-amber-300/40 hover:decoration-amber-200 transition">
              Iniciá sesión
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
