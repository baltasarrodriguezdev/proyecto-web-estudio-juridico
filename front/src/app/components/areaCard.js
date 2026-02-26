

export function AreaCard({nombre,descripcion}){

    return (
       <div className="w-80 h-46 bg-white border border-gray-200 rounded-lg p-5 
       shadow-sm hover:shadow-md 
       transition">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {nombre}
        </h2>
        <p className="text-shadow-2xs text-gray-600">
            {descripcion}
        </p>
        </div>
    )
}