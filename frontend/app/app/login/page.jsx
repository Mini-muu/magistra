import { GoBackHeader } from "@/components/Headers"
import { Section } from "@/components/Section"
import { LoginForm } from "@/components/LoginForm"

export default function Login() {
    return (
        <>
        <GoBackHeader title='Go to Homepage'/>
        <main>
            <Section>
                <LoginForm />
            </Section>
        </main>
        </>
    )
}