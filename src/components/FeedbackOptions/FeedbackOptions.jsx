import React from 'react';
import styles from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"

    
const FeedbackOptions = ({ onLeaveFeedback, options }) => (
    <>
    {options.map((option) => (
        <button className={styles.button} key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    )) }
    </>

);

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

export default FeedbackOptions



