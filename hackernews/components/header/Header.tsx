import styles from '../../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}> Hacker News</h1>
    </header>
  )
}

export default Header;
