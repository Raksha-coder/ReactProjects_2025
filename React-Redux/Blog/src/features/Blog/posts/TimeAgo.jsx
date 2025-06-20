import { parseISO,formatDistanceToNow } from 'date-fns'

const TimeAgo = ({timestamp}) => {
  let time_ago = "";
  if(timestamp){
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    time_ago = `${timePeriod} ago`;
  }

  return (
    <>
        <span title={timestamp}>
            &nbsp; <i>{time_ago}</i>
        </span>
    </>
  )
}

export default TimeAgo;