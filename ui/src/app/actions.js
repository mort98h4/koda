"use server"
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function PostUser(prevState, formData) {
    const conn = await fetch('http://localhost:5009/api/Users', {
        method: "POST",
        body: formData
    });

    if (!conn.ok) {
        const info = await conn.json();
        return {message: info.error};
    }
    revalidatePath('/'); 
    redirect("/");
}