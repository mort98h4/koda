import React from 'react'
import { useFormState } from 'react-dom';
import { toggleModal } from './ModalDelete';

const initialState = {
    error: null,
    message: null
}

export function Form({action, user}) {
    const [state, formAction] = useFormState(action, initialState);
    return (
        <form className="w-full grid grid-cols-6 gap-4 py-4 px-5" action={formAction}>
            {
                user ? 
                    <input type='hidden' id="id" name='id' defaultValue={user.id} />
                : ""
            }
            <div className="text-sm flex flex-col col-span-6 lg:col-span-2 lg:col-start-2">
                <label htmlFor="firstName" className="text-xs opacity-50 pl-1 pb-1">First name</label>
                <input
                    className="rounded-lg py-2 px-1 transition-colors border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800/50 focus:border-gray-500"
                    type="text"
                    name="firstName"
                    id="firstName"
                    minLength={2}
                    maxLength={50}
                    required
                    defaultValue={user ? user.firstName : ""}
                />
            </div>
            <div className="text-sm flex flex-col col-span-6 lg:col-span-2">
                <label htmlFor="lastName" className="text-xs opacity-50 pl-1 pb-1">Last name</label>
                <input
                    className="rounded-lg py-2 px-1 transition-colors border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800/50 focus:border-gray-500"
                    type="text"
                    name="lastName"
                    id="lastName"
                    minLength={2}
                    maxLength={50}
                    required
                    defaultValue={user ? user.lastName : ""}
                />
            </div>
            <div className="text-sm flex flex-col col-span-6 lg:col-span-2 lg:col-start-2">
                <label htmlFor="artistName" className="text-xs opacity-50 pl-1 pb-1">Artist name</label>
                <input
                    className="rounded-lg py-2 px-1 transition-colors border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800/50 focus:border-gray-500"
                    type="text"
                    name="artistName"
                    id="artistName"
                    maxLength={50}
                    defaultValue={user ? user.artistName : ""}
                />
            </div>
            <div className="text-sm flex flex-col col-span-6 lg:col-span-2">
                <label htmlFor="email" className="text-xs opacity-50 pl-1 pb-1">Email</label>
                <input
                    className="rounded-lg py-2 px-1 transition-colors border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800/50 focus:border-gray-500"
                    type="text"
                    name="email"
                    id="email"
                    minLength={2}
                    maxLength={50}
                    required
                    defaultValue={user ? user.email : ""}
                />
            </div>
            <div className='col-span-full text-center'>
                <p className='text-sm text-red-500'>
                    {state?.error}
                </p>
                <p className='text-sm text-green-500'>
                    {state?.message}
                </p>
            </div>
            <div className='col-span-6 text-center py-4 flex justify-center gap-2'>
                {
                    user ?
                        <button onClick={toggleModal} data-modal="modalDelete" type="button" className='px-4 py-1 font-semibold rounded-lg transition-colors bg-red-500/50 border border-red-500 hover:bg-red-500'>Delete</button>
                    : ""
                }
                <button type='submit' className='px-4 py-1 font-semibold rounded-lg transition-colors bg-green-500/50 border border-green-500 hover:bg-green-500'>
                    {
                        user ? "Update" : "Create"
                    }
                </button>
            </div>
        </form>
    )
}