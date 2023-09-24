"use client";

import { ButtonPrimary } from "./Buttons"
import { useState, useEffect } from "react"
import { X } from "lucide-react";
import { EmailInput } from "./Inputs";

export function LoginForm({ children }) {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const setPasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        email !== '' && password !== '' ? setSubmitDisabled(false) : setSubmitDisabled(true)
    }, [email, password])

    return (
        <form onSubmit={handleSubmit} className="w-5/6 h-1/2 bg-black rounded-lg flex flex-col my-outline max-w-sm items-center justify-center gap-5 relative">
            {
                children
            }
            <EmailInput
            onInputChange={handleEmail}
            />
            
            
            <div>
                <div className="flex items-center justify-between">
                    <label for="password" className="block text-sm text-gray-300">Password</label>
                    <a href="#" className="text-xs hover:underline text-gray-400">Forget Password?</a>
                </div>

                <div class="relative flex items-center mt-2">
                    <button onClick={setPasswordVisibility} className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-4 transition-colors duration-300 text-gray-500 hover:text-gray-400">
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                        </svg>
                    </button>

                    <input onChange={handlePassword} type={showPassword ? "text" : "password"} placeholder="********" className="block w-full py-2.5 placeholder-gray-400/70 border rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>

            <div className="h-1"></div>
            <ButtonPrimary disabled={ submitDisabled }>
                Login
            </ButtonPrimary>
        </form>
    )
}

export function LoginFormAllPage({ onExitClick }) {
    return (
        <div className="flex items-center justify-center fixed top-0 w-full h-full backdrop-blur-sm">
            <LoginForm>
                <X onClick={onExitClick} className="absolute top-5 left-5"/>
            </LoginForm>
        </div>
    )
}