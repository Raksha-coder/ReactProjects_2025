import { useSelector } from 'react-redux';
import { selectPostById } from "./postSlice";
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section className="singlePostPage">
        <h2>Post Not Found!</h2>
      </section>
    )
  }

  return (
    <section className="singlePostPage">
      <article className="postDetailCard">
        <h2 className="postTitle">{post.title}</h2>
        <p className="postBody">{post.body}</p>
        <div className="postMeta">
          <PostUser userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <ReactionButton post={post} />
      </article>
    </section>
  )
}

export default SinglePostPage