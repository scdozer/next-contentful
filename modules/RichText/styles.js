import styled from 'styled-components';

export const RichTextWrap = styled.div`
  width: 100%;
`;

export const Bold = styled.strong``;

export const Italic = styled.i`
  font-style: italic;
`;
export const Paragraph = styled.p`
  color: black;
  font-size: 18px;
  line-height: 25px;
  margin: 0 auto 24px auto;
`;

export const H2rt = styled.h2`
  color: black;
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 20px;
  width: 100%;
  max-width: 655px;
  text-align: center;
  margin: 95px auto 45px;
  text-transform: uppercase;
`;

export const Hyperlink = styled.a`
  display: inline-block;
  color: gold;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 7px;
    left: 0;
    height: 1px;
    width: 0;
    transition: width 0.35s ease;
    background-color: gold;
  }
  .no-touch &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export const ListWrap = styled.div`
  margin: 0 auto;
`;

export const ListItem = styled.li`
  list-style: disc;
  margin-left: 25px;
  &:last-of-type {
    margin-bottom: 10px;
  }
  & p {
    margin-bottom: 0px;
    line-height: auto;
  }
  &::marker {
    color: gold;
    font-size: 18px;
  }
  & ul {
    margin-top: 10px;
    & li {
      list-style-type: circle;
    }
    & ::marker {
      color: gold;
    }
  }
`;
export const EmbeddedComponentWrapper = styled.div``;
