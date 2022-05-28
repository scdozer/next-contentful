import styled from 'styled-components';
// import { colors, media } from '/styles';

/*
${media.medium`
  ...
`}
${media.small`
  ...
`}
*/

export const HeaderWrap = styled.div`
  width: 100%
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background: black;
`;

export const LogoWrap = styled.div`
  max-width: 100px;
`;
export const Logo = styled.img`
  max-width: 100px;
`;
export const NavWrap = styled.div`
  display: flex;
`;
export const NavItem = styled.div`
  padding: 10px;
  & a {
    color: white;
    text-decoration: none;
    :hover {
      color: grey;
    }
  }
`;
