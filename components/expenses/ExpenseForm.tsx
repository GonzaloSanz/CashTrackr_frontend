"use client"

import { DraftExpense } from "@/src/schemas";
import { useEffect, useState } from "react";

type ExpenseFormProps = {
    expense?: DraftExpense
}
const ExpenseForm = ({ expense }: ExpenseFormProps) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (expense) {
            setName(expense.name);
            setAmount(String(expense.amount));
        }
    }, [expense]);

    return (
        <>
            <div className="mb-5">
                <label htmlFor="name" className="text-sm uppercase font-bold block mb-2">Nombre</label>
                <input
                    id="name"
                    name="name"
                    className="w-full p-3  border border-gray-100  bg-white"
                    type="text"
                    placeholder="Nombre del Gasto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-7">
                <label htmlFor="amount" className="text-sm uppercase font-bold block mb-2">Cantidad</label>
                <input
                    id="amount"
                    name="amount"
                    className="w-full p-3 border border-gray-100 bg-white"
                    type="number"
                    placeholder="Cantidad del Gasto"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
        </>
    )
}

export default ExpenseForm;