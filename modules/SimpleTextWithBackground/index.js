/**
 *
 * Simple Text With Background
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { Wrap, Title, ShortDescription } from './styles';

const SimpleTextWithBackground = ({ data }) => {
  const { title, shortDescription, background } = data;

  return (
    <>
      <Wrap img={background?.url}>
        <Title>{title}</Title>
        <ShortDescription>{shortDescription}</ShortDescription>
      </Wrap>
    </>
  );
};

SimpleTextWithBackground.propTypes = {};

export default SimpleTextWithBackground;
