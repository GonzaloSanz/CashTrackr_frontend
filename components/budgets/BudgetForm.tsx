import { Budget } from "@/src/schemas";
import { useState } from "react";

type BudgetFormProps = {
    budget?: Budget
}

const BudgetForm = ({ budget }: BudgetFormProps) => {
    const [name, setName] = useState(budget?.name);
    const [amount, setAmount] = useState(budget?.amount);

    return (
        <>
            <div className="space-y-3 mb-5">
                <label htmlFor="name" className="text-sm uppercase font-bold">Nombre</label>
                <input
                    id="name"
                    name="name"
                    className="w-full p-3  border border-gray-100 bg-slate-100"
                    type="text"
                    placeholder="Nombre"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="space-y-3 mb-5">
                <label htmlFor="amount" className="text-sm uppercase font-bold">Cantidad</label>
                <input
                    id="amount"
                    name="amount"
                    type="number"
                    className="w-full p-3  border border-gray-100 bg-slate-100"
                    placeholder="Cantidad Presupuesto"
                    defaultValue={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
        </>
    )
}

export default BudgetForm;