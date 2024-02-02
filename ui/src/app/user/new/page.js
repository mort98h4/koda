// Client component to fix LastPass issues
"use client"

import React, { useState, useEffect } from 'react';
import { PostUser } from "@/app/actions";
import Link from 'next/link';
import {Form} from '@/app/components/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

export default function UserNew() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) return null;
    
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <header className="text-center">
                <h1 className="mb-3 text-2xl font-semibold">Create new user</h1>
            </header>
            <Form action={PostUser}></Form>
            <Link href="/" className='text-sm hover:underline'>
                <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />
                Go back
            </Link>
        </main>
    )   
}