import Link from "next/link";
import "@tailwindplus/elements";

export function Nav() {
  const navLink =
  "relative flex items-center text-sm font-semibold leading-6 text-white/80 transition-all duration-300 hover:text-white";
  return (
    <header className="bg-[#0F1E2E]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src="/assets/img/logoreall.png" alt="" className="h-16 w-auto" />
          </Link>
        </div>

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
              data-slot="icon"
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

        <el-popover-group class="hidden lg:flex lg:gap-x-12">
          {/* Home */}
          <Link
            href="/"
            className={navLink + " font-serif after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"}>
            Home
          </Link>

          {/* Areas de Practica (popover) */}
          <div className="relative">
            <button
    popovertarget="desktop-menu-product"
    className="flex items-center gap-x-1 text-sm/6 font-semibold text-white/80 transition-colors duration-300 hover:text-white"
  >
    <span className="font-serif relative after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
      Areas de Practica
    </span>

    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      data-slot="icon"
      aria-hidden="true"
      className="size-5 flex-none text-gray-500 transition-colors duration-300 group-hover:text-white"
    >
      <path
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  </button>
            <el-popover
              id="desktop-menu-product"
              anchor="bottom"
              popover=""
              class="w-screen max-w-md overflow-hidden rounded-3xl bg-[#0F1E2E] outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(3)] backdrop:bg-transparent open:block data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {/* Penal */}
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 text-gray-400 group-hover:text-white"
                    >
                      <path
                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-auto">
                    
                    <Link href="/areas" className="block font-semibold text-white">
                      Derecho Penal
                      <span className="absolute inset-0"></span>
                    </Link>
                    <p className="mt-1 text-gray-400">
                      Get a better understanding of your traffic
                    </p>
                  </div>
                </div>

                {/* Civil */}
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 text-gray-400 group-hover:text-white"
                    >
                      <path
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-white">
                      Derecho Civil
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-400">
                      Speak directly to your customers
                    </p>
                  </div>
                </div>

                {/* Laboral */}
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 text-gray-400 group-hover:text-white"
                    >
                      <path
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-white">
                      Derecho Laboral
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-400">
                      Your customers’ data will be safe and secure
                    </p>
                  </div>
                </div>

                {/* Familia */}
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 text-gray-400 group-hover:text-white"
                    >
                      <path
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-white">
                      Derecho de Familia
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-400">
                      Connect with third-party tools
                    </p>
                  </div>
                </div>

                {/* Comercial */}
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 text-gray-400 group-hover:text-white"
                    >
                      <path
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-white">
                      Derecho Comercial
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-400">
                      Build strategic funnels that will convert
                    </p>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5">
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 text-gray-400 group-hover:text-white"
                    >
                      <path
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-white">
                      Derecho Administrativo
                      <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-400">
                      Build strategic funnels that will convert
                    </p>
                  </div>
                </div>
              </div>
            </el-popover>
          </div>

          {/* Links principales */}
          <Link
            href="/study"
            className={navLink + " font-serif after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"}>
            El estudio
          </Link>

          <Link
            href="/profesionales"
            className={navLink + " font-serif after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"}>

            Profesionales
          </Link>

          <Link
            href="/contacto"
            className={navLink + " font-serif after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"}>
            Contacto
          </Link>
        </el-popover-group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className=" font-serif relative text-sm font-semibold text-white/80 transition-all duration-300  hover:text-white after:absolute after:left-1/2 after:-bottom-1
            after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      <el-dialog>
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex={0} className="fixed inset-0 focus:outline-none">
            <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0F1E2E] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="/assets/img/logoreall.png"
                    alt=""
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
                    data-slot="icon"
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
                    <div className="-mx-3">
                      <button
                        type="button"
                        command="--toggle"
                        commandFor="products"
                        className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Areas de Practica
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          data-slot="icon"
                          aria-hidden="true"
                          className="size-5 flex-none in-aria-expanded:rotate-180"
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>

                      <el-disclosure id="products" hidden class="mt-2 block space-y-2">
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                        >
                          Derecho Penal
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                        >
                          Derecho Civil
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                        >
                          Derecho Laboral
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                        >
                          Derecho de Familia
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                        >
                          Derecho Comercial
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                        >
                          Derecho Administrativo
                        </a>
                      </el-disclosure>
                    </div>

                    {/* Mobile links */}
                    <Link
                      href="/marketplace"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      El estudio
                    </Link>

                    <Link
                      href="/profesionales"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      Profesionales
                    </Link>

                    <Link
                      href="/company"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      Contacto
                    </Link>
                  </div>

                  <div className="py-6">
                    <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
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
