"use client"
import React, { useState, useEffect } from 'react';
import { Form } from "@/app/components/Form";
import { ModalDelete } from '@/app/components/ModalDelete';
import { Header } from '@/app/components/Header';
import { PutUser } from '@/app/actions';
import { GoBack } from '@/app/components/GoBack';
import { MainEl } from '@/app/components/Main';

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
        <MainEl>
            <Header title='Update user'></Header>
            <Form action={PutUser} user={user}></Form>
            <GoBack href="/"></GoBack>
            <ModalDelete id={user?.id}></ModalDelete>
        </MainEl>
    )
}