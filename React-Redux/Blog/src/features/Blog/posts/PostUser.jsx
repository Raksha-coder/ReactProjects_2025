import { useSelector } from 'react-redux'
import { selectAllUsers } from './users/userSlice'

const PostUser = ({userId}) => {
 const users = useSelector(selectAllUsers);

 const author = users.find(user => user.id == userId);

  return (
        <>
            <span>by {author ? author.name : "unknown author"}</span>
        </>
  )
}

export default PostUser;
