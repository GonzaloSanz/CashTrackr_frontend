import ProfileTabs from "@/components/profile/ProfileTabs";
import ToastNotification from "@/components/ui/ToastNotification";

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <ProfileTabs />
            {children}
            <ToastNotification />
        </>
    );
}
