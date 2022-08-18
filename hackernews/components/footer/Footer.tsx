import styles from "../../styles/Footer.module.scss";
import { AiFillGithub  } from 'react-icons/ai';
import { BsArrowUpRightSquare  } from 'react-icons/bs';


export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Hacker News</h3>

        <div>        
            <div className={styles.container}>
                <a className={styles.link} rel="noreferrer"  href="https://news.ycombinator.com" target="blank"> Official site <span> <BsArrowUpRightSquare /> </span></a>

                <a className={styles.link} rel="noreferrer"  href="https://github.com/MadsHaerup/hackernews" target="blank"> Github <span> <AiFillGithub /> </span></a>
            </div>
        </div>
    </footer>
  )
}
