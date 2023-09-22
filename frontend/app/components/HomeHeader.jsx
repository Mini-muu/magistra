import { ButtonPrimary, ButtonSecondary } from "./Buttons"

export default function HomeHeader() {
    return (
      <header className='h-20 w-full fixed top-0 flex px-5'>
        <div class="flex-1 h-full w-1/2 flex items-center justify-start text-4xl font-semibold">
          MAGISTRA
        </div>
        <div class="flex-1 h-full w-1/2 flex items-center justify-end gap-3">
          <ButtonPrimary >
            Login
          </ButtonPrimary>
          <ButtonSecondary>
            Sign Up
          </ButtonSecondary>
        </div>
      </header>
    )
  }