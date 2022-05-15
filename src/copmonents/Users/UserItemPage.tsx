import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IUser } from "./../../types/types";
import axios from "axios";


interface UserItemPageParams {
    id: string;
}

export const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams()
    const navigate = useNavigate()

    const clickHandler = (e: React.MouseEvent) => {
        navigate("/users")
    }
    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(
                "https://jsonplaceholder.typicode.com/users/" + params.id
            );
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <div className="userItemPage">
            <button onClick={clickHandler}> Back </button>
            <div>
               <b>{user?.name}</b> <br />
               phone:  {user?.phone} <br />
               website: {user?.website} <br/>
               address: {user?.address.city}, {user?.address.street}
            </div>
        </div>
    );
};
