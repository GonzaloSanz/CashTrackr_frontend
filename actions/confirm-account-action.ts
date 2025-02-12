"use server"

import { ErrorResponseSchema, SuccessSchema, TokenSchema } from "@/src/schemas"

type ActionStateType = {
    errors: string[],
    success: string
}

export const confirmAccount = async (token: string, prevState: ActionStateType) => {
    // Validar token
    const confirmToken = TokenSchema.safeParse(token);

    // Si el token no es válido
    if (!confirmToken.success) {
        return {
            errors: confirmToken.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    // Confirmar cuenta
    const url = `${process.env.API_URL}/auth/confirm-account`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: confirmToken.data
        })
    });

    const json = await req.json();

    // Si hay algún error
    if(!req.ok) {
        const {error} = ErrorResponseSchema.parse(json);

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