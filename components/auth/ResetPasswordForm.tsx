import { resetPassword } from "@/actions/reset-password-action";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

type ResetPasswordFormProps = {
    token: string
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
    const router = useRouter();

    const resetPasswordWithToken = resetPassword.bind(null, token);
    const [state, dispatch] = useActionState(resetPasswordWithToken, {
        errors: [],
        success: '',
        changed: false
    });

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(error => {
                toast.error(error);
            })
        }

        if (state.success && !state.changed) {
            toast.success(state.success);
        }

        if (state.success && state.changed) {
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
        <form action={dispatch} className=" mt-14 space-y-5" noValidate>
            <div className="flex flex-col gap-5">
                <label htmlFor="password" className="font-bold text-2xl">Contraseña</label>

                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                />
            </div>

            <div className="flex flex-col gap-5">
                <label htmlFor="password_confirmation" className="font-bold text-2xl">Repetir Contraseña</label>

                <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Repetir Contraseña"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                />
            </div>

            <input
                type="submit"
                value='Guardar Contraseña'
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block"
            />
        </form>
    );
}

export default ResetPasswordForm;