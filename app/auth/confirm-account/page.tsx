import ConfirmAccountForm from "@/components/auth/ConfirmAccountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Confirmar Cuenta - Cashtrackr',
  description: 'Confirmar Cuenta en CashTrackr'
}

const ConfirmAccountPage = () => {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Confirma tu cuenta</h1>
      <p className="text-3xl font-bold">Ingresa el código que recibiste <span className="text-amber-600">por email</span></p>

      <ConfirmAccountForm />
    </>
  )
}

export default ConfirmAccountPage;