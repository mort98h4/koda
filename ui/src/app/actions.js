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
        return {error: info.error};
    }
    revalidatePath('/'); 
    redirect("/");
}

export async function PutUser(prevState, formData) {
    const userId = formData.get("id");

    const conn = await fetch(`http://localhost:5009/api/Users/${userId}`, {
        method: "PUT",
        body: formData
    });

    if (!conn.ok) {
        const info = await conn.json();
        console.log(info);
        return {error: info.error};
    }

    return {message: "User was successfully updated"}
}

export async function DeleteUser(prevState, formData) {
    const userId = formData.get("id");

    const conn = await fetch(`http://localhost:5009/api/Users/${userId}`, {
        method: "DELETE"
    });

    if(!conn.ok) {
        const info = await conn.json();
        console.log(info);
        return {error: info.error};
    }

    revalidatePath('/'); 
    redirect("/");
}