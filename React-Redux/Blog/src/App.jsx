import './App.css'
import { PostList } from './features/Blog/posts/PostList';
import {AddPostForm} from "./features/Blog/posts/AddPostForm";

function App() {

  return (
    <>
      {/* <Counter /> */}
      <AddPostForm />
      <br />
      <PostList />
    </>
  )
}

export default App
