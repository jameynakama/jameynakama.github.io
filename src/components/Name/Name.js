import React from 'react';
import Proptypes from 'proptypes';

import styles from './Name.module.css';

const Name = ({name, url, onClick}) => (
  <a className={styles.name} href={url} onClick={onClick}>{name}</a>
);

Name.propTypes = {
  name: Proptypes.string,
  onClick: Proptypes.func
};

Name.defaultProps = {
  url: "https://www.instagram.com/jameyiguess",
  onClick: () => {}
}

export default Name;
