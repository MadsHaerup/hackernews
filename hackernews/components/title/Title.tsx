import styles from '../../styles/Title.module.scss';

type Title = {
    text: string
};

const Title = ({text}:Title) => {
  return (
      <div className={styles.title}>
          <h2>{text}</h2>
      </div>
  )
}

export default Title;