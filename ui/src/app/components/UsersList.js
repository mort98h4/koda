import { UsersListItem } from "./UsersListItem";

export async function UsersList() {
    const users = await getData();
    return (
        <ul className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {users.map(user => (
                <UsersListItem user={user} />
            ))}
        </ul>
    )
}

async function getData() {
    const res = await fetch("http://localhost:5009/api/Users");
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
}