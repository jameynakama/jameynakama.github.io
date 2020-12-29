import React from 'react';
import Proptypes from 'proptypes';

import styles from './Name.module.css';

const Name = ({name}) => (
  <a className={styles.name} href="https://www.instagram.com/jameyiguess">{name}</a>
);

Name.propTypes = {
  name: Proptypes.string
};

export default Name;
