/**
 *
 * Modules Page
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import { Wrap } from './styles';
import RichText from 'modules/RichText';
import SimpleTextWithBackground from 'modules/SimpleTextWithBackground';

const modulesMap = {
  moduleRichText: RichText,
  moduleSimpleTextWithBackground: SimpleTextWithBackground,
};
const ModulesPage = ({ data }) => {
  const renderModules = () => {
    if (!process.browser) return false;
    const { modules } = data;
    const Modules = _.compact(
      _.map(modules, ({ data }, i) => {
        if (!data) return null;
        const key = Object.keys(data)[0];
        const Module = modulesMap[key];
        const moduleData = data[key];
        return <Module data={moduleData} key={`module-${i}`} />;
      }),
    );
    return Modules;
  };

  return <Wrap>{renderModules()}</Wrap>;
};

export default ModulesPage;
