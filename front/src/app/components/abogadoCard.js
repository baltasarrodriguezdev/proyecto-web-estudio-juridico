'use client';

import { useState } from "react";
import { AbrirModal } from "./modalPerfil";
import Image from "next/image";

export function AbogadoCard({nombre,desc,img,apellido,especialidad}){

    const [abierto,setAbierto] = useState(false); // no esta abierta la descripcion
    const [seleccionado, setSeleccionado] = useState(false) // no esta seleccionado

    return (
        <div className="w-40 h-40 bg-amber-300 flex flex-col items-center">
            <h2>{nombre}</h2>
            <Image src={img}
            alt={nombre}
            width={80}
            height={80}
            className="rounded-full object-cover"/>

            {abierto ? desc : ""}
            <button onClick={()=> setAbierto(!abierto)}>
                {abierto ? 'Ocultar' : 'Ver desc'}
            </button>
            <button onClick={()=> setSeleccionado(true)}>
                Ver perfil
            </button>
            {seleccionado && <AbrirModal
            nombre={nombre}
            apellido={apellido}
            especialidad={especialidad}
            desc={desc}
            onClose={()=> setSeleccionado(false)}
            />}
        </div>
    )
}