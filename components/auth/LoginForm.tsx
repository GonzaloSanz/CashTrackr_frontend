"use client"

import type { Metadata } from 'next';
import { authenticate } from '@/actions/authenticate-user-action';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const metadata: Metadata = {
    title: 'Iniciar Sesión - Cashtrackr',
    description: 'Iniciar Sesión en CashTrackr'
}


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useActionState(authenticate, {
        errors: []
    });

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(error => {
                toast.error(error);
            });
        }
    }, [state]);

    return (
        <form action={dispatch} className="mt-14" noValidate>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor='email' className="font-bold text-2xl">Email</label>

                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2 mb-10">
                <label htmlFor='password' className="font-bold text-2xl">Contraseña</label>

                <input
                    id='password'
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value='Iniciar Sesión'
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer"
            />
        </form>
    )
}

export default LoginForm;