import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import useAuth from '../hooks/useAuth'
import clienteAxios from "../config/axios"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const navigate = useNavigate()

    const { msg } = alerta

    const handleSubmit = async e => {
        e.preventDefault()
        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/login', { email, password })
            localStorage.setItem('APV_token', data.token)
            navigate('/admin')
        } catch (error) {
            setAlerta({ msg: error.response.data.msg, error: true })
        }
    }
    return (
        <>
            <div>
                <h1 className="text-indigo-600 text-6xl font-black">Inicia Sesión y Administra tus <span className="text-black">Pacientes</span></h1>
            </div>
            <div className="mt-20 md:mt-5 bg-white shadow-xl rounded-xl py-10 px-5">
                {msg && <Alerta
                    alerta={alerta}
                />}
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
                    <div className="my-5">
                        <label htmlFor="" className="uppercase text-gray-600 block tex-xl font-bold">Password</label>
                        <input type="password"
                            className="border w-full rounded-xl p-3 mt-3 bg-gray-50"
                            placeholder="Tu contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit"
                        value="Iniciar Sesión"
                        className="bg-indigo-700 w-full py-3 px-10 mt-5 rounded-xl text-white font-bold uppercase md:w-auto hover:cursor-pointer hover:bg-indigo-800"
                    />
                </form>
                <div className="mt-10 lg:flex lg:justify-between">
                    <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='/registrar'>¿No tienes una cuenta? Registrate</Link>
                    <Link className="hover:text-gray-700 text-gray-500 block text-center my-5" to='olvide-password'>Olvidé mi Password</Link>
                </div>
            </div>
        </>
    )
}

export default Login
