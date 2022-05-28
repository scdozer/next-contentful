import { css } from 'styled-components';

const sizes = {
  constrains: {
    desktop: 1300,
  },
  media: {
    mediumMaxWidth: 1180,
    tabletPortrait: 900,
    smallMaxWidth: 640,
    xSmallMaxWidth: 400,
  },
  gutter: {
    small: 20,
    large: 70,
  },
  img: {
    small: '$800x450$',
    medium: '$1040X520$',
    large: '$1440x810$',
  },
};

const media = {
  large: (...args) => css`
    @media (min-width: ${sizes.media.mediumMaxWidth + 1}px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: ${sizes.media.mediumMaxWidth}px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media (max-width: ${sizes.media.smallMaxWidth}px) {
      ${css(...args)}
    }
  `,
  xsmall: (...args) => css`
    @media (max-width: ${sizes.media.xSmallMaxWidth}px) {
      ${css(...args)}
    }
  `,
};

export default media;
