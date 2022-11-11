import React from 'react'
import styles from "./Statistics.module.css"
import propTypes from 'prop-types'


const Statistics = ({good, neutral, bad, total, positivePercentage})=> (
<div>
   
    <ul className={styles.statisticsList}>
        <li className={styles.statisticsItem}>Good: {good}</li>
        <li className={styles.statisticsItem}>Neutral: {neutral}</li>
        <li className={styles.statisticsItem}>Bad: {bad}</li>
        <li className={styles.statisticsItem}>Total: {total}</li>
        <li className={styles.statisticsItem}>Positive feedback: {positivePercentage}%</li>
    </ul>
</div>
);

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total : propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
}

export default Statistics
