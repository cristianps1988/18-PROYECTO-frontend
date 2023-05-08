import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from '../config/axios'

const Registrar = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({ msg: 'Hay campos vacios', error: true })
            return
        }

        if (password !== repetirPassword) {
            setAlerta({ msg: 'Los password no son iguales', error: true })
            return
        }

        if (password.length < 6) {
            setAlerta({ msg: 'Contraseña muy corta, debe tener al menos 6 caracteres', error: true })
            return
        }

        setAlerta({})

        // Crear el usuario en la api
        try {
            await clienteAxios.post('/veterinarios', { nombre, email, password })
            setAlerta({
                msg: 'Creado correctamente, revisa tu email',
                error: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    const { msg } = alerta

    return (
        <>
            <div>
                <h1 className="text-indigo-600 text-6xl font-black">Crea tu Cuenta y Administra tus <span className="text-black">Pacientes</span></h1>
            </div>

            <div className="mt-20 md:mt-5 bg-white shadow-xl rounded-xl py-10 px-5">
                {msg && <Alerta alerta={alerta} />}
                <form action=""
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label htmlFor="" className="uppercase text-gray-600 block tex-xl font-bold">nombre</label>
                        <input type="text"
                            className="border w-full rounded-xl p-3 mt-3 bg-gray-50"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className="uppercase text-gray-600 block tex-xl font-bold">email</label>
                        <input type="email"
                            className="border w-full rounded-xl p-3 mt-3 bg-gray-50"
                            placeholder="Email de Registro"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className="uppercase text-gray-600 block tex-xl font-bold">Password</label>
                        <input type="password"
                            className="border w-full rounded-xl p-3 mt-3 bg-gray-50"
                            placeholder="Tu password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className="uppercase text-gray-600 block tex-xl font-bold">Repetir Password</label>
                        <input type="password"
                            className="border w-full rounded-xl p-3 mt-3 bg-gray-50"
                            placeholder="Repite tu password"
                            value={repetirPassword}
                            onChange={e => setRepetirPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Crear Cuenta" className="bg-indigo-700 w-full py-3 px-10 mt-5 rounded-xl text-white font-bold uppercase md:w-auto hover:cursor-pointer hover:bg-indigo-800" />
                </form>
                <div className="mt-10 lg:flex lg:justify-between">
                    <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='/'>¿Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='/olvide-password'>Olvidé mi Password</Link>
                </div>
            </div>

        </>
    )
}

export default Registrar
