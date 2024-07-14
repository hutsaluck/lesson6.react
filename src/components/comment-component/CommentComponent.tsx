import React, {FC} from 'react';
import './comment-component.css'
import {IComment} from "../../models/IComment";

interface IProps {
    comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    const {name, body, email} = comment
    return (
        <div className="comment-item">
            <h3>{name}</h3>
            <a href={'mailto:'+email}>{email}</a>
            <p>{body}</p>
        </div>
    );
};

export default CommentComponent;