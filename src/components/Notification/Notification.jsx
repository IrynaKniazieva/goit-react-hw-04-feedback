import React from 'react';
import styles from "./Notification.module.css"
import propTypes from 'prop-types';


const Notification = ({message}) => (
<h2 className={styles.message}>{message}</h2>
)

Notification.prototype = {
    message: propTypes.string.isRequired,
}

export default Notification