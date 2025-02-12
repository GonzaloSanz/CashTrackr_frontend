import { useActionState, useEffect } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { DialogTitle } from "@headlessui/react";
import ExpenseForm from "./ExpenseForm";
import { createExpense } from "@/actions/create-expense-action";
import ErrorMessage from "../ui/ErrorMessage";

type AddExpenseFormProps = {
    closeModal: () => void
}
const AddExpenseForm = ({ closeModal }: AddExpenseFormProps) => {
    const { id } = useParams();

    const createExpenseWithBudgetId = createExpense.bind(null, +id!);
    const [state, dispatch] = useActionState(createExpenseWithBudgetId, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if (state.success) {
            closeModal();
            toast.success(state.success);
        }
    }, [state, closeModal]);

    return (
        <>
            <DialogTitle as="h3" className="font-black text-4xl text-purple-950 my-3">Agregar Gasto</DialogTitle>

            <p className="text-xl font-bold">Rellena el formulario y crea un {''}
                <span className="text-amber-500">gasto</span>
            </p>

            {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
            <form
                action={dispatch}
                className="bg-gray-100 shadow-lg rounded-lg p-10 mt-8 border"
                noValidate
            >
                <ExpenseForm />

                <input
                    type="submit"
                    className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                    value='Registrar Gasto'
                />
            </form>
        </>
    )
}

export default AddExpenseForm;