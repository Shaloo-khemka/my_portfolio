import React from 'react'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'

export function Experience() {
    return <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.image)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })}</div>
            <ul className={styles.history}>{
                history.map((historyItem, id) => {
                    return <div key={id} className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                        </div>
                    </div>
                })}</ul>
        </div>
    </section>
}