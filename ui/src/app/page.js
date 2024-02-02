import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

async function getData() {
  const res = await fetch("http://localhost:5009/api/Users");

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const users = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <header className='text-center'>
        <h1 className="mb-3 text-2xl font-semibold">Users</h1>
        <Link href="/user/new" className='text-sm text-green-500 mb-3 block transition-colors hover:text-green-400'>
          Create new user
        </Link>
      </header>
      <ul className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {users.map(user => (
          <li key={user.id} className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-2 font-semibold">{user.artistName ? user.artistName : `${user.firstName} ${user.lastName}`}</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{user.firstName} {user.lastName}</p>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{user.email}</p>
            <div className='absolute top-2 right-5 pt-2 text-sm'>
              <Link href={`/user/edit/${user.id}`} className='opacity-0 transition-opacity group-hover:opacity-50 hover:!opacity-100' >
                <FontAwesomeIcon icon={faPen} />
              </Link>
            </div>            
          </li>
        ))}
      </ul>
    </main>
  );
}
