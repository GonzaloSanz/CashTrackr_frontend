import { Metadata } from "next";
import Link from "next/link";
import CreateBudgetForm from "@/components/budgets/CreateBudgetForm";

export const metadata: Metadata = {
    title: 'CashTrackr - Nuevo Presupuesto',
    description: 'Crear un presupuesto en CashTrackr'
}

const page = () => {
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-full md:w-auto'>
                    <h1 className='font-black text-4xl text-purple-950 my-5'>
                        Nuevo Presupuesto
                    </h1>
                    <p className="text-xl font-bold">Rellena el formulario y crea un nuevo {''}
                        <span className="text-amber-500">presupuesto</span>
                    </p>
                </div>
                <Link
                    href={'/admin'}
                    className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                >
                    Volver
                </Link>
            </div>

            <div className='p-10 mt-10 shadow-lg border '>
                <CreateBudgetForm />
            </div>
        </>
    );
}

export default page;