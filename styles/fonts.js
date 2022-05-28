import { css } from 'styled-components';

const fonts = {
  default: {
    regular: () => css`
      font-family: 'Gibson-normal', Helvetica, Arial, sans-serif;
      font-weight: normal;
    `,

    bold: () => css`
      font-family: 'Gibson-semiBold', Helvetica, Arial, sans-serif;
      font-weight: bold;
    `,

    italic: () => css`
      font-family: 'Gibson-italic', Helvetica, Arial, sans-serif;
      font-weight: normal;
    `,
  },
};

export default fonts;
