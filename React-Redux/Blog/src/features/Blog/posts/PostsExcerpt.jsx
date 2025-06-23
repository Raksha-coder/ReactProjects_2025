import React from 'react'
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { Link } from 'react-router-dom';

const PostsExcerpt = ({post}) => {  
  return (

            <article className="postCard">
                <h3>{post.title}</h3>
                <p>{post.body.substring(0,100)}</p>
                <Link to={`post/${post.id}`} className="viewPostLink">View Post</Link>
                <p className="postMeta">
                    <PostUser userId={post.userId} /> | <TimeAgo timestamp={post.date} />
                </p>
                    <ReactionButton post={post}/>
            </article>

  )
}

export default PostsExcerpt