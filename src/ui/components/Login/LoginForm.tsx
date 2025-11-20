import { useState } from "react"
import { useForm } from "react-hook-form"
import {FaEye, FaEyeSlash} from "react-icons/fa"

import toast from "react-hot-toast"
import { Navigate } from "react-router"
import { useUser } from "../../../context/userContext"
import { loginService } from "../../../services/authServices"



export const LoginForm = () => {
    
    const {setInfo,userInfo} = useUser()
    const [redirect,setRedirect] = useState(false)
    const { register,handleSubmit,reset,formState: { errors } } = useForm({
                mode:'onChange',//validacxion en tiempo real
            });
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data:any) => {
        // Login user
        const result = await loginService(data,reset,setRedirect,setInfo)
        
        if(result?.succes){
            toast.success(result.message)
        } else {
            toast.error(result!.message)
        }
    
    }

    if(redirect && userInfo?.isAdmin){
        ///
    }

    if(redirect && !userInfo?.isAdmin){
        return <Navigate to={'/home'}/>
    }



  return (

   
    <form onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex flex-col gap-4 lg:gap-6 max-w-[500px] mx-auto">
      
        <div>
            <input
                {...register("email", {
                    required: "El correo electrónico es obligatorio",
                    pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingrese un correo electrónico válido",
                    },
                    maxLength: {
                    value: 50,
                    message: "Máximo 50 caracteres permitidos",
                    },
                })}
                className="p-2 outline-2 rounded border focus:outline-primary w-full mx-auto"
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                autoComplete="email"
                />

                {errors.email && (
                <p className="text-red-500 text-sm mt-2 ml-1">
                    {errors.email.message as string}
                </p>
                )}
        </div>
        <div className="relative">
            <input 
            {...register("password",
            {required: "La contraseña es obligatoria",
            minLength: {value: 6, message: "Mínimo 6 caracteres" },
            maxLength: {value: 20, message: "Máximo 20 caracteres"}
            } 
            )}
            name="password"
            className="p-2 outline-2 rounded border focus:outline-primary w-full"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Contraseña"
            autoComplete="current-password"
            />
            <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password &&(
            <p className="text-red-500 text-sm mt-2 ml-1">
                {errors.password.message as string}
            </p>
            )}


        </div>
            <div>
            <button 
            type="submit"
            className="w-full bg-primary text-white p-2 rounded hover:bg-primary-dark transition"
            >
                Register
            </button>
            </div>

    </form>

    
  )
}
