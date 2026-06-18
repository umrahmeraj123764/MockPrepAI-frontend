import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; 
import axios from 'axios'
import { useContext, useState } from "react";
import { FaRobot } from "react-icons/fa";


const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const{login}=useContext(AuthContext)
    const navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        

        const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
            email,password
            })

            localStorage.setItem('token',response.data.token)

            login(response.data.token,response.data)
            navigate('/setup')
        }

    catch(error){
        console.log(error)
    }
}


return (
    <div>
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <FaRobot className="mx-auto text-indigo-600 text-5xl mb-3"/>

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black"> Login to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

    <form onSubmit={handleSubmit}>
                    <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                Email address
            </label>
    <div className="mt-2">
    <input
        id='email'
        type='text'
        value={email}
        placeholder='Enter your email'
        onChange={(e)=>setEmail(e.target.value)}
        autoComplete="email"
        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-indigo-300/70 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"

        required/>
        </div>
            </div>


        <div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                  Password
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
    <input
        id='password'
        type='password'
        value={password}
        placeholder='Enter your password'
        onChange={(e)=>setPassword(e.target.value)}
         autoComplete="email"
        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-indigo-300/70 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        required/>
         </div>
         <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                </a>
            </div>

   <div className="m-5"> <button type='submit'  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Login</button> </div>
    </form>  
    <p className="mt-10 text-center text-sm/6 text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">
             Register
           </Link>
          </p>
    </div>
    </div>  
    </div>
)
}

export default Login

