import React from 'react';
import UsersComponent from "../components/users-component/UsersComponent";
import PostsComponent from "../components/posts-component/PostsComponent";
import CommentsComponent from "../components/comments-component/CommentsComponent";

const HomePage = () => {
    return (
        <div>
            <UsersComponent />
            <PostsComponent />
            <CommentsComponent />
        </div>
    );
};

export default HomePage;