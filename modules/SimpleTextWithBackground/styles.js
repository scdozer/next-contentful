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

export const Wrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h2`
  font-size: 25px;
  letter-spacing: 14px;
  max-width: 600px;
  margin: 20px auto;
  color: white;
`;
export const ShortDescription = styled.p`
  letter-spacing: 6px;
  max-width: 600px;
  margin: 0 auto;
  color: white;
`;
