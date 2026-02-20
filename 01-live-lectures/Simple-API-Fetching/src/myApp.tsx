import { useEffect, useState } from "react";
import type { User } from "./types/user.types";
import axios from "axios";
import UserCard from "./components/UserCard";

const UserApp: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getUsers() {
    try {
      setLoading(true);
      const res = await axios.get("https://reqres.in/api/users?page=1", {
        headers: {
          "x-api-key": "reqres_ae3aa03bb8084f829438f5f88aa53289",
        },
      });
      const { data } = res.data;
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserApp;
