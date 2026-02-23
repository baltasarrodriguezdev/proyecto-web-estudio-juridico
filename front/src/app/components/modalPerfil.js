

export  function AbrirModal({nombre,apellido,especialidad,desc, onClose}) {
     return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <p className="text-black">Perfil del abogado</p>
        <h2 className="text-black">{nombre}</h2>
        <h3 className="text-black">{apellido}</h3>
        <h4 className="text-black">{especialidad}</h4>
        <p className="text-black">{desc}</p>
        <button className="text-black" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}