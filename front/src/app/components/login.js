import Link from "next/link";

export function Login(params) {
    return(
        <section className="w-full h-screen bg-[#0F1E2E]">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src="/assets/img/logoreall.png" alt="Your Company" className="mx-auto h-20 w-auto" />
    <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">Iniciá sesión en tu cuenta</h2>
  </div>

  <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#" method="POST" className="space-y-6">
      <div>
        <label for="email" className="block text-sm/6 font-medium text-gray-100">Email</label>
        <div className="mt-2">
          <input id="email" type="email" placeholder="ejemplo@email.com" name="email" required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-100">Contraseña</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-[#93863f]  hover:text-[#d7bb1a] ">Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" placeholder="••••••••"  type="password" name="password" required autocomplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-[#d7bb1a] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#aa8c1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Iniciá sesión</button>
      </div>
    </form>

    <p className="mt-6 gap-6 text-center text-sm text-slate-400">
      ¿No estás registrado?{" "}
      <a href="/register" className="font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-amber-300 hover:decoration-amber-200 transition">Registrate</a>
    </p>
  </div>
</div>
</section>
    )
} 