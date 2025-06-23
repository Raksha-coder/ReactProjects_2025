import React from 'react'
import { useSelector } from 'react-redux';
import {selectPostById } from "./postSlice";
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const SinglePostPage = () => {
  
  const post = useSelector((state) => selectPostById(state,postId));

  if(!post){
    return (
        <section>
            <h2>Post Not Found!</h2>
        </section>
    )
  }
  
  return (
            <article>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p className="postCredit">
                    <PostUser userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                    <br />
                    <ReactionButton post={post}/>
                </p>
            </article>
  )
}

export default SinglePostPage