import Link from 'next/link'
import { Header } from './components/Header';
import { MainEl } from './components/Main';
import { UsersList } from './components/UsersList';

export default async function Home() {
  return (
    <MainEl>
      <Header title='Users'>
        <Link href="/user/new" className='text-sm text-green-500 mb-3 block transition-colors hover:text-green-400'>
          Create new user
        </Link>
      </Header>
      <UsersList></UsersList>
    </MainEl>
  );
}
