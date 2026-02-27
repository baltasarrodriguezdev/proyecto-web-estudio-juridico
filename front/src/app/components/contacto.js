"use client";
import { Send } from "lucide-react";

export default function Contacto() {
  return (
    <section className="w-full bg-[#0F1E2E] py-6 pb-20">
      <div className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center my-5 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-[#93863f]">
            Contact
            </h2>
          <p className="mt-4 max-w-md leading-6 text-[#ffffff]/80 font-serif">
            Estamos a su disposición para atender cualquier consulta legal.
            Contáctenos y nuestro equipo le responderá a la brevedad.
          </p>
        </div>

        <div>
          <form
            action="https://proyecto-web-estudio-juridico.onrender.com/api/contacto"
            method="POST"
            className="
              mx-auto mt-10
              w-full max-w-4xl
              bg-[#182432c1]
              shadow-xl shadow-black
              px-4 sm:px-6 lg:px-8
              py-6
              rounded-xl
            "
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 px-0 sm:px-2 py-2">
              <div>
                <label className="block text-sm/6 font-semibold text-white">
                  Nombre Completo
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="nombre"
                    className="block w-full rounded-md bg-[#57545451] px-5 py-2.5 text-amber-50 border border-transparent outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/30 transition-all duration-150"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-white">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    required
                    name="email"
                    type="email"
                    className="block w-full rounded-md bg-[#57545451] px-5 py-2.5 text-amber-50 border border-transparent outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/30 transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 px-0 sm:px-2 py-2">
              <div>
                <label className="block text-sm/6 font-semibold text-white">
                  Telefono
                </label>
                <div className="mt-2">
                  <input
                    required
                    name="telefono"
                    type="tel"
                    className="block w-full rounded-md bg-[#57545451] px-5 py-2.5 text-amber-50 border border-transparent outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/30 transition-all duration-150"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-white">
                  Asunto
                </label>
                <div className="mt-2">
                  <input
                    required
                    name="asunto"
                    type="text"
                    className="block w-full rounded-md bg-[#57545451] px-5 py-2.5 text-amber-50 border border-transparent outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/30 transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 px-0 sm:px-2 py-2">
              <div>
                <label className="block text-sm/6 font-semibold text-white">
                  Mensaje
                </label>
                <div className="mt-2">
                  <textarea
                    name="mensaje"
                    className="block w-full rounded-md bg-[#57545451] px-5 py-6 text-amber-50 border border-transparent outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/30 transition-all duration-150 resize-none"
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 px-0 sm:px-2 py-2">
              <div className="mt-2">
                <button
                  className="flex justify-center items-center gap-3 font-serif hover:bg-[#1d1c1cd5] w-full bg-black text-amber-50 px-5 py-3 rounded-md transition-all duration-150"
                  type="submit"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
