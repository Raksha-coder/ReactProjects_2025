import { Outlet } from "react-router-dom";
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
          <Outlet />   
          {/* all the children will appear with Header and Footer */}
          {/* All children like PostList, AddPostForm will appear here */}
      </main>
    </>

  )
}

export default Layout