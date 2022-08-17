import PostData from "../../types/post"
import dateFormat from "../../utils/dateFormat";
import styles from '../../styles/Post.module.scss';

export const PostItem = ({post, authorKarma}:PostData) => {
    console.log(new Date(post.time * 1000))

  return (
    <a className={styles.container} href={post.url} target="blank">
        <article className={styles.container__article}>
            <p className={styles.author} >{post.by} - <strong>{authorKarma}</strong> </p>
            <h2 className={styles.title}>{post.title}</h2>

            <div className={styles.meta}>
                <span>{dateFormat(post.time)}</span>
                <span>{post.score}</span>
            </div>
        </article>
    
    </a>
  )
}
