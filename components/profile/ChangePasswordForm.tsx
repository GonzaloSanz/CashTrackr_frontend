"use client"

import { updatePassword } from "@/actions/update-password-action";
import { useActionState, useEffect, useState } from "react";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";

const ChangePasswordForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [state, dispatch] = useActionState(updatePassword, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
            setCurrentPassword('');
            setPassword('');
            setPasswordConfirmation('');
        }
    }, [state]);

    return (
        <>
            <form action={dispatch} className=" mt-10" noValidate>
                {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="current_password" className="font-bold text-2xl">Contraseña Actual</label>
                    <input
                        id="current_password"
                        name="current_password"
                        type="password"
                        placeholder="Contraseña Actual"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="password" className="font-bold text-2xl">Contraseña Nueva</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Contraseña Nueva"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-3 mb-8">
                    <label htmlFor="password_confirmation" className="font-bold text-2xl">Repetir Contraseña</label>
                    <input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        placeholder="Repetir Contraseña"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value='Cambiar Contraseña'
                    className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
                />
            </form>
        </>
    );
}

export default ChangePasswordForm;