"use client"

import { updateUser } from "@/actions/update-user-action";
import { User } from "@/src/schemas";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ErrorMessage from "../ui/ErrorMessage";

type ProfileFormProps = {
    user: User
}

const ProfileForm = ({ user }: ProfileFormProps) => {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');

    const [state, dispatch] = useActionState(updateUser, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        }
    }, [state]);

    return (
        <>
            <form action={dispatch} className=" mt-10" noValidate>
                {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="name" className="font-bold text-2xl">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        type="name"
                        placeholder="Nombre"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-3 mb-8">
                    <label htmlFor="email" className="font-bold text-2xl">Email</label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value='Guardar Cambios'
                    className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
                />
            </form>
        </>
    );
}

export default ProfileForm;