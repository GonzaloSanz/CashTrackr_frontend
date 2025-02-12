"use server"

import { ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[]
}

export const register = async (prevState: ActionStateType, formData: FormData) => {
    const registerData = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }

    // Validar datos
    const register = RegisterSchema.safeParse(registerData);

    if (!register.success) {
        const errors = register.error.errors.map(error => error.message);
        return {
            errors,
            success: ''
        }
    }

    const url = `${process.env.API_URL}/auth/create-account`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: register.data.email,
            name: register.data.name,
            password: register.data.password,
        })
    });

    const json = await req.json();

    // Si se produce un error
    if (req.status === 409) {
        const { error } = ErrorResponseSchema.parse(json);

        return {
            errors: [error],
            success: ''
        }
    }

    const success = SuccessSchema.parse(json.msg);

    return {
        errors: [],
        success
    }

}