import React from 'react'
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsExcerpt = ({post}) => {  
  return (

            <article>
                <h3>{post.title}</h3>
                <p>{post.body.substring(0,100)}</p>
                <p className="postCredit">
                    <PostUser userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                    <br />
                    <ReactionButton post={post}/>
                </p>
            </article>

  )
}

export default PostsExcerpt