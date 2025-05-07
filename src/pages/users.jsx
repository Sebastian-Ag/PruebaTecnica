import { useEffect } from 'react';
import useStore from '../store/useUserStore';
import UserTable from '../components/userTable';
export default function Users() {
  const { Users, fetchUsers } = useStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserTable users={Users}/>
    </div>
  )
}

