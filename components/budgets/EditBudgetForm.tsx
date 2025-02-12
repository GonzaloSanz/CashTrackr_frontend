"use client"

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Budget } from "@/src/schemas";
import BudgetForm from "./BudgetForm";
import { editBudget } from "@/actions/edit-budget-action";
import ErrorMessage from "../ui/ErrorMessage";

type EditBudgetFormProps = {
    budget: Budget
}

const EditBudgetForm = ({ budget }: EditBudgetFormProps) => {
    const router = useRouter();

    const editBudgetWithId = editBudget.bind(null, budget.id);
    const [state, dispatch] = useActionState(editBudgetWithId, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if(state.success) {
            toast.success(state.success);
            router.push('/admin');
        }
    }, [state, router]);

    return (
        <form
            action={dispatch}
            noValidate
        >
            {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
            <BudgetForm
                budget={budget}
            />
            <input
                type="submit"
                className="bg-amber-500 w-full p-3 mt-4 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                value='Guardar Cambios'
            />
        </form>
    )
}

export default EditBudgetForm;