import { FC } from "react";
import List from "./../List";
import { useEffect, useState } from "react";
import { IUser } from "./../../types/types";
import { UserItem } from "./UserItem";
import { fetchItems } from "./../../fetchAPI/fetch";
import { useNavigate } from "react-router-dom";
import loader from './../../loader/Loader.gif'
import { Loader } from "../Loader";

export const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const urlUsers = "https://jsonplaceholder.typicode.com/users"
    const navigate = useNavigate()

    useEffect(() => {
        fetchItems(urlUsers, setUsers)
    }, []);

    return !users.length? <Loader/> : (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem onClick={(user) => navigate("/users/" + user.id)}
                    user={user}
                    key={user.id} />}
            />
        </div>

    );
}

