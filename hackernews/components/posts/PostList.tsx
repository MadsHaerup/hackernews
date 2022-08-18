import PageData from '../../types/postList';
import { PostItem } from './PostItem';
import styles from '../../styles/Posts.module.scss';

const PostList = ({posts, karmaScore}:PageData) => {
  return (
    <div className={styles.postList}>
    {
        posts.map((post, i)=>(
          post.by === karmaScore[i].id ?  <PostItem key={post.id} post={post} authorKarma={karmaScore[i].karma} /> : null
        ))
    }
    </div>
  )
}

export default PostList