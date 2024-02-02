import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function UsersListItem({user}) {
    return (
        <li className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-2 font-semibold">{user.artistName ? user.artistName : `${user.firstName} ${user.lastName}`}</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{user.firstName} {user.lastName}</p>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{user.email}</p>
            <div className="absolute top-2 right-5 pt-2 text-sm">
                <Link href={`/user/edit/${user.id}`} className='opacity-0 transition-opacity group-hover:opacity-50 hover:!opacity-100'>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </Link>
            </div>
        </li>
    )
}