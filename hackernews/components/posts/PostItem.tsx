import PostData from "../../types/post"
import dateFormat from "../../utils/dateFormat";
import styles from '../../styles/Post.module.scss';

const PostItem = ({post, authorKarma}:PostData) => {
  return (
    <a className={styles.container} rel="noreferrer" href={post.url} target="blank">
        <article className={styles.container__article}>
            <p className={styles.author} >{post.by} - <strong>{authorKarma}</strong> </p>
            <h2 className={styles.title}>{post.title}</h2>

            <div className={styles.meta}>
                <span>{dateFormat(post.time)}</span>
                <span className={styles.score}>{post.score}</span>
            </div>
        </article>
    </a>
  )
}

export default PostItem;