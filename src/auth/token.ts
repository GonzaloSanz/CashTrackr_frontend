import { cookies } from "next/headers";

// Obtener JWT del usuario autenticado
export const getToken = async () => { 
    return (await cookies()).get('CASHTRACKR_TOKEN')?.value;
 }