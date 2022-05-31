import { PostCard } from "../PostCard";
import './styles.css'


export const Posts = ({ posts }) => (
    <div className="posts">
    {posts.map((post, index) => (
     <PostCard key={index} 
      id={post.id}
      title={post.title}
      body={post.body}
      cover={post.cover}
     />
    ))}
  </div>
)