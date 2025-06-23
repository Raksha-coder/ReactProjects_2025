import React from 'react'
import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import {addNewPost} from "./postSlice"
import { selectAllUsers } from './users/userSlice';
import "./../../../css/AddPostForm.css";
export const AddPostForm = () => {
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [userId,setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  const canSave = [title,content,userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () =>{
        if(canSave){
          try{
            setAddRequestStatus("pending");
            dispatch(addNewPost({title,body:content,userId})).unwrap();

            //unwrap give use response , it work just like promise .
            //If the thunk fails, it throws an error (like a real Promise rejection)

            setTitle("");
            setContent("");
            setUserId("");
          }catch(err){
            console.error("Failed to save post",err)
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
      <h2>Add New Post</h2>
      <form className="postForm">
        <label htmlFor="userId">Author:</label>
        <select id="userId" value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Select user</option>
          {userOptions}
        </select>

        <label htmlFor="title">Post Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="content">Post Content:</label>
        <textarea id="content" rows="5" value={content} onChange={(e) => setContent(e.target.value)} />

        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
