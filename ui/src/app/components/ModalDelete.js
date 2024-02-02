import React from 'react'
import { useFormState } from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { DeleteUser } from "../actions";

const initialState = {
    error: null
}

export function ModalDelete({id}) {
    const [state, formAction] = useFormState(DeleteUser, initialState);
    return (
        <section id="modalDelete" className='hidden absolute top-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
            <div onClick={toggleModal} data-modal="modalDelete" className="w-full h-full absolute z-0"></div>
            <div className='w-fit z-10 relative bg-gray-100 border border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 text-center p-12 m-4 rounded-lg'>
                <button onClick={toggleModal} data-modal="modalDelete" className='absolute top-4 right-4 text-xl transition-colors text-white/50 hover:text-white'>
                    <FontAwesomeIcon className="pointer-events-none" icon={faXmark}></FontAwesomeIcon>
                </button>
                <p className='mb-3'>Are you sure you want to delete this user?</p>
                <div className='flex justify-center gap-2'>
                    <button onClick={toggleModal} data-modal="modalDelete" className='px-4 py-1 font-semibold rounded-lg transition-colors bg-slate-500/50 border border-slate-500 hover:bg-slate-500'>Cancel</button>
                    <form action={formAction}>
                        <input type='hidden' id='id' name='id' defaultValue={id} />
                        <button className='px-4 py-1 font-semibold rounded-lg transition-colors bg-red-500/50 border border-red-500 hover:bg-red-500'>Delete</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export function toggleModal() {
    const modal = document.querySelector(`#${event.target.dataset.modal}`);
    modal.classList.toggle("hidden");
}