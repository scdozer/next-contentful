/**
 *
 * Header
 *
 */

import React from 'react';
import Link from 'next/link';
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { HeaderWrap, LogoWrap, Logo, NavWrap, NavItem } from './styles';

const Header = ({ settings }) => {
  return (
    <HeaderWrap>
      <LogoWrap>
        <Logo src={settings.logo.url} alt={settings.logo.title} />
      </LogoWrap>
      <NavWrap>
        {settings.menuLinksCollection?.items.map(link => (
          <NavItem key={link.sys.id}>
            <Link href={link.path === '/' ? link.path : `/${link.path}`}>
              {link.title}
            </Link>
          </NavItem>
        ))}
      </NavWrap>
    </HeaderWrap>
  );
};

Header.propTypes = {};

export default Header;
