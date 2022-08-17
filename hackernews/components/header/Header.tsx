import Image from 'next/image'
import React from 'react';
import hacker from '../../public/hacker.png';
import styles from '../../styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <Image
                alt="Mountains"
                src={hacker}
                width={200}
                height={200}
                layout="intrinsic"
            />
            <h1 className={styles.title}> Hacker News</h1>
        </div>
    </header>
  )
}
