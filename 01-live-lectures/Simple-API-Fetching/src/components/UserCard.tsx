import type { User } from "../types/user.types";

interface UserCardProp {
  user: User;
}

const UserCard: React.FC<UserCardProp> = ({ user }) => {
  return (
    <div className="p-4 border rounded shadow-md flex items-center gap-4">
      <img src={user.avatar} alt="" className="w-22 h-22 rounded-full" />
      <h2 className="text-lg front-semibold">
        {(user.first_name, user.last_name)}
      </h2>
      <p className="text-gray-500">{user.email}</p>
    </div>
  );
};

export default UserCard;
