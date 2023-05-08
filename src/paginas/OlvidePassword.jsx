import { Link } from "react-router-dom"
import { useState } from "react"
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta"

const OlvidePassword = () => {
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if (!email) {
            setAlerta({ msg: 'El email es obligatorio', error: true })
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })
            setAlerta({ msg: data.msg })
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
                <h1 className="text-indigo-600 text-6xl font-black">Recupera tu Acceso y no Pierdas tus <span className="text-black">Pacientes</span></h1>
            </div>
            <div className="mt-20 md:mt-5 bg-white shadow-xl rounded-xl py-10 px-5">
                {msg && <Alerta alerta={alerta} />}
                <form action=""
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label htmlFor="" className="uppercase text-gray-600 block tex-xl font-bold">email</label>
                        <input type="email"
                            className="border w-full rounded-xl p-3 mt-3 bg-gray-50"
                            placeholder="Email de Registro"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Enviar Instrucciones" className="bg-indigo-700 w-full py-3 px-10 mt-5 rounded-xl text-white font-bold uppercase md:w-auto hover:cursor-pointer hover:bg-indigo-800" />
                </form>
                <div className="mt-10 lg:flex lg:justify-between">
                    <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='/'>¿Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='/registrar'>¿No tienes una cuenta? Registrate</Link>
                </div>
            </div>
        </>
    )
}

export default OlvidePassword
