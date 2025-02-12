"use client"

import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { register } from "@/actions/create-account-action";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [state, dispatch] = useActionState(register, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(error => {
                toast.error(error);
            });
        }

        if (state.success) {
            setEmail("");
            setName("");
            setPassword("");
            setPasswordConfirmation("");

            toast.success(state.success, {
                onClose: () => {
                    router.push('/auth/login');
                },
                onClick: () => {
                    router.push('/auth/login');
                }
            });
        }
    }, [state, router]);

    return (
        <form action={dispatch} className="mt-14" noValidate>
            <div className="flex flex-col gap-2 mb-5">
                <label className="font-bold text-2xl" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label className="font-bold text-2xl" htmlFor="name">Nombre</label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Nombre"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label className="font-bold text-2xl" htmlFor="password">Contraseña</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2 mb-9">
                <label className="font-bold text-2xl" htmlFor="password_confirmation">Repetir Contraseña</label>
                <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Repetir Contraseña"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value='Registrarme'
                className="bg-purple-950 hover:bg-purple-800 transition-colors w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block"
            />
        </form>
    )
}

export default RegisterForm