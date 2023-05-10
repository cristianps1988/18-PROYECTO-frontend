import { useState } from 'react'
import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState(Date.now())
    const [sintomas, setSintomas] = useState('')
    const [alerta, setAlerta] = useState({})

    const { } = usePacientes()


    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
    }


    const { msg } = alerta

    return (
        <>
            <p className="text-lg text-center mb-10">
                Añade tus pacientes y <span className="text-indigo-700 font-bold">Administralos</span>
            </p>
            <form action=""
                className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-xl rounded-xl"
                onSubmit={handleSubmit}
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
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
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
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas"
                        className="text-gray-700 uppercase font-bold"
                    >Sintomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value='Agregar Paciente'
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-lg"
                />
            </form>
            {msg && <Alerta
                alerta={alerta}
            />}
        </>
    )
}

export default Formulario
