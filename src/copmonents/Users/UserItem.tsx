import { FC, useEffect, useState } from "react";
import { IUser } from "../../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({user, onClick}) => {

  return (
    <div className="userItem">
      <div>
        {user.id}.<b>{user.name}</b> <br/> {user.address.city} <br/>  
        {user.address.street}
      </div>

      <button onClick={()=>onClick(user)}> More </button>
    </div>
  );
};
