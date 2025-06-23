import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { selectPostById, updatePost } from './postSlice';
import { useParams,useNavigate } from 'react-router-dom';
import { selectAllUsers } from './users/userSlice';
import "./../../../css/AddPostForm.css";

export const EditPostForm = () => {
   const {postId} = useParams();
   const navigate = useNavigate();
   const post = useSelector((state) => selectPostById(state,Number(postId)));
   const users = useSelector(selectAllUsers);
   

  const [title,setTitle] = useState(post?.title);
  const [content,setContent] = useState(post?.body);
  const [userId,setUserId] = useState(post?.userId);
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();

   if (!post) {
    return (
      <section className="singlePostPage">
        <h2>Post Not Found!</h2>
      </section>
    )
  }
       
  const canSave = [title,content,userId].every(Boolean) && addRequestStatus === 'idle';

  const onEditPostClicked = () =>{
        if(canSave){
          try{
            setAddRequestStatus("pending");
            dispatch(updatePost({id:postId,title,body:content,userId,reactions:post.reactions})).unwrap();

            //unwrap give use response , it work just like promise .
            //If the thunk fails, it throws an error (like a real Promise rejection)

            setTitle("");
            setContent("");
            setUserId("");
            navigate(`/post/${postId}`);
          }catch(err){
            console.error("Failed to edit post",err)
          }finally{
            setAddRequestStatus("idle")
          }
        }
  }


  const userOptions = users.map((user) =>(
      <option value={user.id} key={user.id}>
          {user.name}
      </option>
  ))

  return (
     <section className="formSection">
      <h2>Edit Post</h2>
      <form className="postForm">
        <label htmlFor="userId">Author:</label>
        <select id="userId" defaultValue={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Select user</option>
          {userOptions}
        </select>

        <label htmlFor="title">Post Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="content">Post Content:</label>
        <textarea id="content" rows="5" value={content} onChange={(e) => setContent(e.target.value)} />

        <button type="button" onClick={onEditPostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}


export default EditPostForm;
