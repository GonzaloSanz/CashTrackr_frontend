import Logo from "@/components/ui/Logo";
import ToastNotification from "@/components/ui/ToastNotification";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
                <div className="lg:bg-auth lg:bg-30 lg:bg-no-repeat lg:bg-left-bottom bg-purple-950 flex justify-center">
                    <div className="w-96 py-10 lg:py-20">
                        <Logo />
                    </div>
                </div>
                <div className="p-10 lg:py-28">
                    <div className="mx-w-3xl mx-auto">
                        {children}
                    </div>
                </div>
            </div>

            <ToastNotification />
        </>
    )
}

export default AuthLayout;