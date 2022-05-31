import './style.css'
export const PostCard = ({title, body, cover}) => {
    return(
    <div className='post'> 
       <img src={cover} alt={title} />
       <div className='postContent'> 
        <h2>{title}</h2>
        <p>{body}</p>
       </div>
    </div>
    )
}