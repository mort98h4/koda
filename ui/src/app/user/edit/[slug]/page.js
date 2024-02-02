"use client"
import React, { useState, useEffect } from 'react';
import { Form } from "@/app/components/Form";
import { PutUser } from '@/app/actions';

export default function UserEdit({params}) {
    const [user, setUser] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const userId = params.slug;
    useEffect(() => {
        setIsClient(true);
        async function getData() {
            const res = await fetch(`http://localhost:5009/api/Users/${userId}`);

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
    
            const user = await res.json();
            setUser(user);
        }
        getData();
    }, []);
    if (!isClient) return null;

    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <header className='text-center'>
                <h1 className='mb-3 text-2xl font-semibold'>Edit user</h1>
            </header>
            <Form action={PutUser} user={user}></Form>
        </main>
    )
}