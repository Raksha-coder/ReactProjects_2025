import React from 'react'
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';


const reactionEmojis = {
     thumbsUp : '👍',
     wow:'😲',
     heart:'❤',
     rocket:'🚀',
     coffee:'☕'
}

const ReactionButton = ({post}) => {
  const dispatch = useDispatch();

  const reactionBtn = Object.entries(reactionEmojis).map(([name,emoji]) =>{
         return (
                <button 
                    key={name}
                    type='button'
                    className='reactionButton'
                    onClick={() => dispatch(reactionAdded({postId : post.id, reaction : name}))}>
                        {emoji} {post.reactions[name]}
                </button>
            )
  })

  //main return 
  return <>{reactionBtn}</>
}

export default ReactionButton;
