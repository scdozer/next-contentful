import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ul {
  list-style: none;
}

li {
  list-style-type: none;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

/**
* Fonts
 */
@font-face {
  font-family: 'Gibson-normal';
  src: url('/Gibson-Regular.woff2') format('woff2'),
    url('/Gibson-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Gibson-semiBold';
  src: url('/Gibson-SemiBold.woff2') format('woff2'),
    url('/Gibson-SemiBold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Gibson-italic';
  src: url('/Gibson-Italic.woff2') format('woff2'),
    url('/Gibson-Italic.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Georgia-italic';
  src: url('/Georgia-Italic.woff2') format('woff2'),
    url('/Georgia-Italic.woff') format('woff');
  font-weight: normal;
  font-style: italic;
  font-display: block;
}


html {
  font-size: calc(100vw / 1920 * 10);
  line-height: 1;
}


body {
  font-family: "Gibson-normal";
  font-size: 16px;
}

b { 
  font-family: 'Gibson-semiBold';
}

a {
  color: inherit;
  outline: none;
  text-decoration: none;
}

button {
  background: transparent;
  border: transparent;
  cursor: pointer;
}

body {
  margin: 0px;
}
`;

// export { GlobalStyles };
