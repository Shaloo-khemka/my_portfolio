import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export function About() {
    return (
        <section className={styles.conatiner} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* <img src={getImageUrl("about/aboutImage.png")} alt="Me"/> */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with 5 years of experience in bulding responsive sites. </p>
                    </li>
                </ul>
                <li className={styles.aboutItem}>
                    <h3>Backend Developer</h3>
                    <p>I have one year of experience in backend development. </p>
                </li>
            </div>
        </section>
    )
}
