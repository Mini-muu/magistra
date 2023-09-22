"use client";

import { ButtonPrimary, ButtonSecondary } from "./Buttons"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react";
import { LoginFormAllPage } from "./LoginForm";

export function HomeHeader() {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const showLogin = () => {
    setShowLoginForm(!showLoginForm)
  }

    return (
      <>
      <header className='h-20 w-full fixed top-0 flex px-5 bg-black my-outline'>
        <div class="flex-1 h-full w-1/2 flex items-center justify-start text-4xl font-semibold">
          MAGISTRA
        </div>
        <div class="flex-1 h-full w-1/2 flex items-center justify-end gap-3">
          <ButtonPrimary onButtonClick={showLogin}>
            Login
          </ButtonPrimary>
          <ButtonSecondary>
            Sign Up
          </ButtonSecondary>
        </div>
      </header>
      {
        showLoginForm ?
        <LoginFormAllPage onExitClick={showLogin}/>
        :
        null
      }
      </>
    )
  }

export function GoBackHeader({ title }) {
  return (
    <header className='h-20 w-full fixed top-0 flex px-5 flex items-center justify-start bg-black my-outline'>
      <Link href='/' className="flex items-center justify-center gap-2">
        <ChevronLeft />
        <p>{ title }</p>
      </Link>
    </header>
  )
}