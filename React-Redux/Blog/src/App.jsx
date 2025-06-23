import './App.css'
import { PostList } from './features/Blog/posts/PostList';
import {AddPostForm} from "./features/Blog/posts/AddPostForm";
import SinglePostPage from "./features/Blog/posts/SinglePostPage";
import Layout from './Components/Layout';
import {Routes,Route} from "react-router-dom";
import { EditPostForm } from './features/Blog/posts/EditPostForm';
function App() {

  return (
    <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<PostList />}/>
        {/* When user goes to / and no specific path, show the PostList component. */}

        <Route path='post'>
            <Route index element = {<AddPostForm />} />
            {/* if user go to post show the addpostform page */}
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

