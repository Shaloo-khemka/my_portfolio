import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Intro.module.css'

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shaloo</h1>
        <p className={styles.description}>I'm a front-end developer with 5 years of experience using Javascript and React.</p>
        <a href='mailto:tulsyanshaloo@gmail.com' className={styles.contactBtn}>Contact me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="me" className={styles.introImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
