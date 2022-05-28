/**
 *
 * Home Page
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { Wrap } from './styles';

const HomePage = ({ data }) => {
  const { title } = data;
  return (
    <Wrap>
      <h2>{title}</h2>
    </Wrap>
  );
};

HomePage.propTypes = {};

export default HomePage;
