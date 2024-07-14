import React, {FC, useEffect, useState} from 'react';
import './comments-component.css'
import {commentService} from "../../services/api.service";
import {IComment} from "../../models/IComment";
import CommentComponent from "../comment-component/CommentComponent";

const CommentsComponent: FC = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentService.getAllComments().then((comments: IComment[]) => setComments([...comments]));
    }, []);

    return (
        <div>
            <h2>{comments.length ? `Comments` : ``}</h2>
            <div className="wrap-comments">
                {
                    comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default CommentsComponent

