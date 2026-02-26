"use client";

import Link from "next/link";
import "@tailwindplus/elements";

export function Nav() {
  const navLink =
    "relative flex items-center text-sm font-semibold leading-6 text-white/80 transition-all duration-300 hover:text-white";

  const underline =
    "after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full";

  const mobileLink =
    "font-serif -mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/5 hover:text-white transition";

  const mobileButton =
    "font-serif flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-sm font-semibold text-white/90 hover:bg-white/5 hover:text-white transition";

  // Por ahora: todas las áreas llevan a /areas
  const areas = [
    { label: "Derecho Penal", href: "/areas" },
    { label: "Derecho Civil", href: "/areas" },
    { label: "Derecho Laboral", href: "/areas" },
    { label: "Derecho de Familia", href: "/areas" },
    { label: "Derecho Comercial", href: "/areas" },
    { label: "Derecho Administrativo", href: "/areas" },
  ];

  return (
    <header className="bg-[#0F1E2E]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Alvarez y Robles</span>
            <img
              src="/assets/img/logoreall.png"
              alt="Alvarez y Robles"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Mobile button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            command="show-modal"
            commandFor="mobile-menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className={`${navLink} font-serif ${underline}`}>
            Home
          </Link>

          {/* Áreas de Práctica (dropdown elegante) */}
          <div className="relative">
            <button
              type="button"
              popovertarget="desktop-menu-areas"
              className="group flex items-center gap-x-1 text-sm font-semibold text-white/80 transition-colors duration-300 hover:text-white"
            >
              <span className="font-serif relative after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                Áreas de Práctica
              </span>

              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="size-5 flex-none text-white/50 transition-transform duration-200 group-hover:text-white/80"
              >
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <el-popover
              id="desktop-menu-areas"
              anchor="bottom"
              popover=""
              class="w-72 overflow-hidden rounded-2xl bg-[#0F1E2E] shadow-2xl outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(3)] backdrop:bg-transparent open:block data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="h-px w-full bg-amber-300/70" />

              <div className="py-2">
                {areas.map((item, idx) => (
                  <Link
                    key={`${item.label}-${idx}`}
                    href={item.href}
                    className="block px-5 py-2.5 font-serif text-sm text-white/85 hover:text-white hover:bg-white/5 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="p-3">
                <Link
                  href="/areas"
                  className="block text-center rounded-xl bg-white/5 hover:bg-white/10 px-4 py-2 font-serif text-sm text-white/85 hover:text-white transition"
                >
                  Ver todas las áreas →
                </Link>
              </div>
            </el-popover>
          </div>

          <Link href="/study" className={`${navLink} font-serif ${underline}`}>
            El estudio
          </Link>

          <Link
            href="/profesionales"
            className={`${navLink} font-serif ${underline}`}
          >
            Profesionales
          </Link>

          <Link
            href="/contacto"
            className={`${navLink} font-serif ${underline}`}
          >
            Contacto
          </Link>
        </div>

        {/* Login (desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className={`font-serif relative text-sm font-semibold text-white/80 transition-all duration-300 hover:text-white ${underline}`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <el-dialog>
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex={0} className="fixed inset-0 focus:outline-none">
            <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0F1E2E] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Alvarez y Robles</span>
                  <img
                    src="/assets/img/logoreall.png"
                    alt="Alvarez y Robles"
                    className="h-16 w-auto"
                  />
                </Link>

                <button
                  type="button"
                  command="close"
                  commandFor="mobile-menu"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {/* ✅ HOME agregado */}
                    <Link href="/" className={mobileLink}>
                      Home
                    </Link>

                    {/* Áreas acordeón */}
                    <div className="-mx-3">
                      <button
                        type="button"
                        command="--toggle"
                        commandFor="areas-mobile"
                        className={mobileButton}
                      >
                        Áreas de Práctica
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="size-5 flex-none text-white/60 in-aria-expanded:rotate-180 transition-transform"
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <el-disclosure
                        id="areas-mobile"
                        hidden
                        class="mt-2 block space-y-1"
                      >
                        {areas.map((item, idx) => (
                          <Link
                            key={`${item.label}-${idx}`}
                            href={item.href}
                            className="font-serif block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-white transition"
                          >
                            {item.label}
                          </Link>
                        ))}

                        <Link
                          href="/areas"
                          className="font-serif block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-white/70 hover:bg-white/5 hover:text-white transition"
                        >
                          Ver todas →
                        </Link>
                      </el-disclosure>
                    </div>

                    <Link href="/study" className={mobileLink}>
                      El estudio
                    </Link>

                    <Link href="/profesionales" className={mobileLink}>
                      Profesionales
                    </Link>

                    <Link href="/contacto" className={mobileLink}>
                      Contacto
                    </Link>
                  </div>

                  <div className="py-6">
                    <Link
                      href="/login"
                      className="font-serif -mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5 hover:text-white transition"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>
  );
}