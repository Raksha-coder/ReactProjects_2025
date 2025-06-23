import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {globalStore} from "./app/store.js";
import { Provider } from "react-redux";
import { fetchUsers } from './features/Blog/posts/users/userSlice.js';

//load the user when the app runs 
globalStore.dispatch(fetchUsers());  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </StrictMode>,
)
