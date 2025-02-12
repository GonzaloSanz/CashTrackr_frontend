"use server"

import { cookies } from "next/headers";
import { ErrorResponseSchema, LoginSchema, SuccessSchema } from "@/src/schemas";
import { redirect } from "next/navigation";

type ActionStateType = {
    errors: string[]
}

export const authenticate = async (prevState: ActionStateType, formData: FormData) => {
    const loginCredentials = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    // Validar formato de credenciales
    const auth = LoginSchema.safeParse(loginCredentials);

    if (!auth.success) {
        return {
            errors: auth.error.errors.map(issue => issue.message)
        }
    }

    // Enviar petición
    const url = `${process.env.API_URL}/auth/login`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: auth.data.email,
            password: auth.data.password
        })
    });

    const json = await req.json();

    // Si hay algún error
    if (!req.ok) {
        const { error } = ErrorResponseSchema.parse(json);

        return {
            errors: [error]
        }
    }

    // Crear cookie
    (await cookies()).set({
        name: 'CASHTRACKR_TOKEN',
        value: json,
        httpOnly: true,
        path: '/'
    });

    redirect('/admin');
}