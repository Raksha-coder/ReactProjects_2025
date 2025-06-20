
import { useSelector } from "react-redux";
import {selectAllPosts} from "./postSlice";
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";
import reactionAdded from "./postSlice";

export const PostList = () => {
    //get posts
    const posts = useSelector(selectAllPosts);

    const orderePosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    //render posts
    const renderPostLists = orderePosts.map((post) => (
        <article key={post.id} style={{"border":"2px solid blue","margin":"2px"}}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <PostUser userId={post.userId} />
                <TimeAgo timestamp={post.date} />
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
