import React from "react";
import Avatar from "@material-ui/core/Avatar";
import SendIcon from "@material-ui/icons/Send";
import './Post.css';
const Post = () => {
    const PostPic = require('./pic.jpg');
    const usename = "ajeet_j_panchal";
    const comment = "nice pic rashmika";
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={PostPic} alt="name" />
                <h4> {usename}</h4>
            </div>
            <div className="post__body">
                <img src={PostPic} alt="Post h"  />
            </div>
            <div className="post__footer">
                <p className="post__caption">
                    <h1>hastage</h1>
                </p>
            </div>
            <div className="post__comments">
                <h4>{comment}</h4>
            </div>
            <form className="post__commentForm">
                <input
                    type="text"
                    placeholder="Comment here..."
                    className="comment__box"
                />
                <button className="post__commentBtn">
                    <SendIcon />
                </button>
            </form>

        </div>
    )
}

export default Post;