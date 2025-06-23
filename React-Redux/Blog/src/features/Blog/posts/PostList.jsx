
import { useDispatch, useSelector } from "react-redux";
import {selectAllPosts , getPostsStatus , getPostsError , fetchPosts} from "./postSlice";
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { useEffect } from "react";

export const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    //calling the api if it is idle (First time)
    useEffect(() =>{
        if(postsStatus === 'idle')
            dispatch(fetchPosts())

    },[postsStatus,dispatch])



    const orderePosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    //render posts
    const renderPostLists = orderePosts.map((post) => (
        <article key={post.id} style={{"border":"2px solid blue","margin":"2px"}}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <PostUser userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <br />
                <ReactionButton post={post}/>
            </p>
        </article>
    ));


  return (
    <>
        <section>
            <h2>Posts</h2>
            {renderPostLists}
        </section>
    </>
  )
}
