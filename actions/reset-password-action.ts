"use server"

import { ErrorResponseSchema, ResetPasswordSchema, SuccessSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[],
    success: string,
    changed: boolean
}

export const resetPassword = async(token: string, prevState: ActionStateType, formData: FormData) => {

    const resetPasswordInput = {
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }

    const resetPassword = ResetPasswordSchema.safeParse(resetPasswordInput);

    if(!resetPassword.success) {
        return {
            errors: resetPassword.error?.issues.map(issue => issue.message),
            success: '',
            changed: false
        }
    }

    const url = `${process.env.API_URL}/auth/reset-password/${token}`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: resetPasswordInput.password
        })
    })

    const json = await req.json();

    if(!req.ok) {
        const { error } = ErrorResponseSchema.parse(json);

        return {
            errors: [error],
            success: '',
            changed: false
        }
    }

    const success = SuccessSchema.parse(json.msg);

    return {
        errors: [],
        success,
        changed: true
    }
}