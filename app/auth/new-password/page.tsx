import PasswordResetHandler from "@/components/auth/PasswordResetHandler";

const NewPasswordPage = () => {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Restablecer Contraseña</h1>
      <p className="text-3xl font-bold">Ingresa el código que recibiste
        <span className="text-amber-500"> por email</span>
      </p>

      <PasswordResetHandler />
    </>
  )
}

export default NewPasswordPage;