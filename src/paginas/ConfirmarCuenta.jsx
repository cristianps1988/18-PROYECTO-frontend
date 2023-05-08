import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [alerta, setAlerta] = useState({})

    const params = useParams()
    const { id } = params


    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `/veterinarios/confirmar/${id}`
                const { data } = await clienteAxios(url)
                setCuentaConfirmada(true)
                setAlerta({ msg: data.msg })
            } catch (error) {
                setAlerta({ msg: error.response.data.msg, error: true })
            }
            setCargando(false)
        }
        confirmarCuenta()
    }, [])


    return (
        <>
            <div>
                <h1 className="text-indigo-600 text-6xl font-black">Confirma tu cuenta y Comienza a Administrar tus <span className="text-black">Pacientes</span></h1>
            </div>
            <div className="mt-20 md:mt-5 bg-white shadow-xl rounded-xl py-10 px-5">
                {!cargando &&
                    <Alerta
                        alerta={alerta}
                    />}
                {cuentaConfirmada && (
                    <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='/'>Iniciar Sesión</Link>
                )}
            </div>
        </>
    )
}

export default ConfirmarCuenta
