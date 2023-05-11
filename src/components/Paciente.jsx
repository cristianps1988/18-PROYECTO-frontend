
import usePacientes from "../hooks/usePacientes"

const Paciente = ({ paciente }) => {

    const { setEdicion, eliminarPaciente } = usePacientes()

    const { nombre, email, fecha, propietario, sintomas, _id } = paciente

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(nuevaFecha)
    }

    return (
        <div className='bg-white rounded-xl mx-5 my-10 shadow-md px-5 py-10'>
            <p className='text-indigo-700 uppercase my-2 font-bold'>Nombre: <span className='font-normal normal-case text-black'>{nombre}</span></p>
            <p className='text-indigo-700 uppercase my-2 font-bold'>Propietario: <span className='font-normal normal-case text-black'>{propietario}</span></p>
            <p className='text-indigo-700 uppercase my-2 font-bold'>Email contacto: <span className='font-normal normal-case text-black'>{email}</span></p>
            <p className='text-indigo-700 uppercase my-2 font-bold'>Fecha ingreso: <span className='font-normal normal-case text-black'>{formatearFecha(fecha)}</span></p>
            <p className='text-indigo-700 uppercase my-2 font-bold'>Sintomas: <span className='font-normal normal-case text-black'>{sintomas}</span></p>
            <div className='flex justify-between my-5'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-lg'
                    onClick={() => setEdicion(paciente)}
                >Editar</button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white uppercase font-bold rounded-lg'
                    onClick={() => eliminarPaciente(_id)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
