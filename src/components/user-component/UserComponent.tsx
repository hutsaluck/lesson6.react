import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import './user-component.css'

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div className="user-item">
            <h3>{user.id}. {user.name}</h3>
        </div>
    );
};

export default UserComponent;