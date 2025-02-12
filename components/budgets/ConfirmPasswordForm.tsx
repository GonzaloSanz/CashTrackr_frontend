
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { DialogTitle } from "@headlessui/react";
import { useActionState, useEffect } from "react";
import { deleteBudget } from "@/actions/delete-budget-action";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";

const ConfirmPasswordForm = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const budgetId = +searchParams.get('deleteBudgetId')!;

    const closeModal = () => {
        const hideModal = new URLSearchParams(searchParams.toString());
        hideModal.delete('deleteBudgetId');
        router.replace(`${pathname}?${hideModal}`);
    }

    const deleteBudgetWithPassword = deleteBudget.bind(null, budgetId);
    const [state, dispatch] = useActionState(deleteBudgetWithPassword, {
        errors: [],
        success: ''
    });
    
    useEffect(() => {
        if(state.success) {
            toast.success(state.success);
            closeModal();
        }
    }, [state, closeModal]);

    return (
        <>
            <DialogTitle as="h3" className="font-black text-4xl text-purple-950 my-5">
                Eliminar Presupuesto
            </DialogTitle>
            <p className="text-xl font-bold">Ingresa tu contraseña para {''}
                <span className="text-amber-500">eliminar el presupuesto {''}</span>
            </p>
            <p className='text-gray-600 text-sm mb-6'>(El presupuesto y sus gastos no se podrán recuperar)</p>

            {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
            <form action={dispatch} noValidate>
                <div className="flex flex-col gap-3 mb-8">
                    <label htmlFor="password" className="font-bold text-2xl">Contraseña</label>
                    <input
                        id="password"
                        name='password'
                        type="password"
                        placeholder="Contraseña"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                    />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <input
                        type="submit"
                        value='Eliminar Presupuesto'
                        className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black cursor-pointer transition-colors"
                    />
                    <button
                        className="bg-amber-500 hover:bg-amber-600 w-full p-3 rounded-lg text-white font-black cursor-pointer transition-colors"
                        onClick={closeModal}
                    >Cancelar</button>
                </div>
            </form>

        </>
    )
}

export default ConfirmPasswordForm;