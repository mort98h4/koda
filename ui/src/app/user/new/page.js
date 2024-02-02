// Client component to fix LastPass issues
"use client"

import React, { useState, useEffect } from 'react';
import { PostUser } from "@/app/actions";
import {Form} from '@/app/components/Form';
import { Header } from '@/app/components/Header';
import { GoBack } from '@/app/components/GoBack';
import { MainEl } from '@/app/components/Main';

export default function UserNew() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) return null;
    
    return (
        <MainEl>
            <Header title="Create new user"></Header>
            <Form action={PostUser}></Form>
            <GoBack href='/'></GoBack>
        </MainEl>
    )   
}