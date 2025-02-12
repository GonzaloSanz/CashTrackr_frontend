import type { Metadata } from 'next';
import RegisterForm from "@/components/auth/RegisterForm";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Crear Cuenta - Cashtrackr',
    description: 'Crear Cuenta en CashTrackr'
}

const RegisterPage = () => {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Crear una Cuenta</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-600">finanzas</span></p>

            <RegisterForm />

            <nav className='mt-10 flex flex-col space-y-4'>
                <Link
                    href={'/auth/login'}
                    className='text-center text-gray-500'
                >¿Ya tienes una cuenta? Inicia Sesión</Link>
                <Link
                    href={'/auth/forgot-password'}
                    className='text-center text-gray-500'
                >¿Olvidaste tu Contraseña? Restablecer</Link>
            </nav>
        </>
    )
}

export default RegisterPage;