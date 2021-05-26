import React from 'react';
import PropTypes from 'prop-types';
import styles from './Test.module.css';

const Test = () => (
  <div className={styles.Test} data-testid="Test">
    Test Component
  </div>
);

Test.propTypes = {};

Test.defaultProps = {};

export default Test;
