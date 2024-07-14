import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import './users-component.css'

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers().then((value: IUser[]) => setUsers([...value]));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <div className="wrap-users">
                {
                    users.map((user) => (
                        <UserComponent
                            key={user.id}
                            user={user}
                        />))
                }
            </div>
        </div>
    );
};

export default UsersComponent;