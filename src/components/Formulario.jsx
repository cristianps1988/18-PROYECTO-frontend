
const Formulario = () => {
    return (
        <>
            <p className="text-lg text-center mb-10">
                Añade tus pacientes y <span className="text-indigo-700 font-bold">Administralos</span>
            </p>
            <form action=""
                className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-xl rounded-xl"
            >
                <div className="mb-5">
                    <label htmlFor="nombre"
                        className="text-gray-700 uppercase font-bold"
                    >Nombre mascota</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario"
                        className="text-gray-700 uppercase font-bold"
                    >Nombre Propietario</label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email"
                        className="text-gray-700 uppercase font-bold"
                    >Email Propietario</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email del Propetario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha"
                        className="text-gray-700 uppercase font-bold"
                    >Fecha Ingreso</label>
                    <input
                        type="date"
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas"
                        className="text-gray-700 uppercase font-bold"
                    >Sintomas</label>
                    <textarea
                        id="email"
                        placeholder="Describe los Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <input
                    type="submit"
                    value='Agregar Paciente'
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-lg"
                />
            </form>
        </>
    )
}

export default Formulario
