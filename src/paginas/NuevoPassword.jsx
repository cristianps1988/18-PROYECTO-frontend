import { useState, useEffect } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"
import { useParams, Link } from "react-router-dom"


const NuevoPassword = () => {
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const [tokenValido, setTokenValido] = useState(false)
    const [passwordModificado, setPasswordModificado] = useState(false)


    const params = useParams()
    const { token } = params

    useEffect(() => {
        const validarToken = async () => {
            try {
                await clienteAxios(`/veterinarios/olvide-password/${token}`)
                setAlerta({ msg: 'Escribe tu nuevo password' })
                setTokenValido(true)
            } catch (error) {
                setAlerta({ msg: 'Hubo un error con el enlace', error: true })
            }
        }
        validarToken()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        if (password.length < 6) {
            setAlerta({ msg: 'El password debe tener al menos 6 caracteres', error: true })
            return
        }
        try {
            const { data } = await clienteAxios.post(`/veterinarios/olvide-password/${token}`, { password })
            setAlerta({ msg: data.msg })
            setPasswordModificado(true)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta
    return (
        <>
            <div>
                <h1 className="text-indigo-600 text-6xl font-black">Restablece tu password y no pierdas acceso a tus <span className="text-black">Pacientes</span></h1>
            </div>
            <div className="mt-20 md:mt-5 bg-white shadow-xl rounded-xl py-10 px-5">
                {msg && <Alerta alerta={alerta} />}
                {tokenValido && (
                    <>
                        <form action=""
                            onSubmit={handleSubmit}
                        >
                            <div className="my-5">
                                <label htmlFor="" className="uppercase text-gray-600 block tex-xl font-bold">Nuevo Password</label>
                                <input type="password"
                                    className="border w-full rounded-xl p-3 mt-3 bg-gray-50"
                                    placeholder="Tu nuevo password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <input type="submit" value="Guardar Nuevo Password" className="bg-indigo-700 w-full py-3 px-10 mt-5 rounded-xl text-white font-bold uppercase md:w-auto hover:cursor-pointer hover:bg-indigo-800" />
                        </form>
                        {passwordModificado && <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='/'>Iniciar Sesión</Link>}
                    </>
                )}
            </div>
        </>
    )
}

export default NuevoPassword
