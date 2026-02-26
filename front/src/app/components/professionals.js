export default function Profesionals({profesionales}){
    return (
        <section className="w-full py-16">
            <div className="w-full">
                <div className="flex flex-col px-6 justify-center items-center my-5 text-center">
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-[#0F1E2E]">
  Nuestros Profesionales
</h2>
                    <p className="mt-4 max-w-md  leading-6 text-[#0F1E2E]/80 font-serif">
                    Ofrecemos servicios especializados en múltiples áreas del derecho para cubrir todas sus necesidades legales.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    {profesionales.map((p) => (
                        <div className="bg-[#0F1E2E] mx-10 my-5 w-70 h-110 rounded-sm overflow-hidden shadow-md shadow-black/50 hover:translate-y-3 hover:shadow-2xl transition-all duration-200 ease-in-out">
                            <div className="w-full bg-amber-200 h-54 overflow-hidden">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}${p.img_url}`} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="px-5 py-5 text-center">
                                <h2 className="font-serif text-[#ffffff] text-xl mt-3">{p.nombre}</h2>
                                <h4 className="font-serif text-[#dec466]  mt-3">{p.nombre_area}</h4>
                                <p className="font-serif text-[#969591e0] text-sm mt-3 ">{p.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}