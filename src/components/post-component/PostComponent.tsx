import React, {FC} from 'react';
import './post-component.css'
import {IPost} from "../../models/IPost";

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    const {title, body} = post
    return (
        <div className="post-item">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostComponent;