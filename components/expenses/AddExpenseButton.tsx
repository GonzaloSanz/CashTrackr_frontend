"use client"

import { useRouter } from "next/navigation"


const AddExpenseButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(location.pathname + '?addExpense=true&showModal=true')}
      className="bg-amber-500 px-10 py-2 rounded-lg text-white font-bold cursor-pointer"
    >Agregar Gasto</button>
  )
}

export default AddExpenseButton;