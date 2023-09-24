"use client";

import { ButtonPrimary } from "./Buttons"
import { useState, useEffect } from "react"
import { X } from "lucide-react";
import { EmailInput, TextInput, PasswordInput } from "./Inputs";

export function SignupForm({ children }) {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleCpassword = (e) => {
        setCpassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        if(cpassword !== '') {
            if(password !== cpassword) {
                setPasswordError("Passwords don't match")
            }
            if(password == cpassword) {
                setPasswordError('')
            }
        }
    }, [password, cpassword])

    useEffect(() => {
        email !== '' && username !== '' && password !== '' && cpassword !== '' && password === cpassword ? setSubmitDisabled(false) : setSubmitDisabled(true)
    }, [email, username, password, cpassword])

    return (
        <form onSubmit={handleSubmit} className="w-5/6 h-1/2 py-72 bg-black rounded-lg flex flex-col my-outline max-w-sm items-center justify-center gap-5 relative">
            {
                children
            }
            <EmailInput 
            onInputChange={handleEmail}
            />

            <TextInput
            onInputChange={handleUsername}
            label="Username"
            placeholder="john_doe"
            />
            
            <PasswordInput
            onInputChange={handlePassword}
            errorMessage={passwordError}
            />

            <PasswordInput
            onInputChange={handleCpassword}
            />            

            <div className="h-1"></div>
            <ButtonPrimary disabled={ submitDisabled }>
                Sign Up
            </ButtonPrimary>
        </form>
    )
}

export function SignupFormAllPage({ onExitClick }) {
    return (
        <div className="flex items-center justify-center fixed top-0 w-full h-full backdrop-blur-sm">
            <SignupForm>
                <X onClick={onExitClick} className="absolute top-5 left-5"/>
            </SignupForm>
        </div>
    )
}