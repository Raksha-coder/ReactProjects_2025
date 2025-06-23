
import { useDispatch, useSelector } from "react-redux";
import {selectAllPosts , getPostsStatus , getPostsError , fetchPosts} from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";
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



    let content;
    if(postsStatus === 'loading'){
        content = <p>{"Loading..."}</p>
    }else if (postsStatus === 'succeeded'){
        const orderePosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
        const renderPostLists = orderePosts.map((post,index) => (
            <PostsExcerpt key={index} post={post}/>
        ));
        content = renderPostLists;
    }else if (postsStatus === 'failed'){
             content = <p>{postsError}</p>
    }

   
  return (
    <>
        {/* <h2>Posts</h2> */}
        <section className="postList">
            {content}
        </section>
    </>
  )
}
