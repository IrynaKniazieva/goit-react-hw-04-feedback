import React from 'react';
import styles from "./Section.module.css"
import propTypes from 'prop-types'


const Section = ({title, children}) => (
    <div>
        <h1 className={styles.title}>{title}</h1>
        {children}
    </div>

)

Section.protoTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.element.isRequired,
  };

export default Section