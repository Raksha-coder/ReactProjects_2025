import React from 'react'
import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import {postAdded} from "./postSlice"
import { selectAllUsers } from './users/userSlice';

export const AddPostForm = () => {
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [userId,setUserId] = useState("");
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onSavePostClicked = () =>{
        if(title && content && userId){
            dispatch(postAdded(title,content,userId));

            setTitle("");
            setContent("");
        }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) =>(
      <option value={user.id} key={user.id}>
          {user.name}
      </option>
  ))

  return (
    <>
          {/* save posts */}
        <h2>Add new Post</h2>
        <form>
          <label htmlFor="userId">Author : </label>
            <select id='userId' value={userId} onChange={(e) => setUserId(e.target.value)}>
              <option value=""></option>
              {userOptions}
            </select>

            <label htmlFor="title">Post Title : </label>
            <input type="text" value={title}  id='title' onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <label htmlFor="content">Post Content :</label>
            <input type="text" value={content}  id='content' onChange={(e) => setContent(e.target.value)}/>
            <button type='button' onClick={() =>onSavePostClicked()} disabled={!canSave}>Save Post</button>
        </form>
    </>
  )
}
