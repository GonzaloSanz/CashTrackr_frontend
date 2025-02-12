"use client"

import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { forgotPassword } from "@/actions/forgot-password-action";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");

    const [state, dispatch] = useActionState(forgotPassword, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(error => {
                toast.error(error);
            })
        }

        if (state.success) {
            setEmail("");
            toast.success(state.success);
        }
    }, [state]);

    return (
        <form action={dispatch} className=" mt-14 space-y-5" noValidate>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="email" className="font-bold text-2xl">Email</label>

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

            <input
                type="submit"
                value='Enviar Instrucciones'
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer "
            />
        </form>
    )
}

export default ForgotPasswordForm;