import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <h2 className={styles.title}>Contact</h2>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/emailIcon.png")}
                        alt="Email" />
                    <a href="mailto:tulsyanshaloo@gmail.com">tulsyanshaloo@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/shaloo-tulsyan-a8a44a98" target="_blank">linkedin.com/shaloo</a>
                </li>
                {/* <li>
                    <img 
                    src={getImageUrl("contact/githubIcon.png")} 
                    alt="Email" />
                    <a href="mailto:tulsyanshaloo@gmail.com">tulsyanshaloo@gmail.com</a>
                </li> */}
            </ul>
        </footer>
    )
}
