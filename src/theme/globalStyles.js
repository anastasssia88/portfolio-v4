import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
/* HTML5 display-role reset for older browsers */
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
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html {
    min-height: 100vh;
    scroll-behavior: smooth;
    --padding-y-sm: 17%;
    --padding-y-md: 17%;
    --before-left: 22.9%;

    @media (max-width: 1024px) {
      --before-left: 22.7%;
    }
    @media (max-width: 768px) {
      --padding-y-sm: 5%;
      --padding-y-md: 10%;
      --before-left: 8.7%;
    }
    @media (max-width: 540px) {
      --before-left: 8%;
    }
    @media (max-width: 425px) {
      --before-left: 7.4%;
    }
    @media (max-width: 375px) {
      --before-left: 7.1%;
    }
    @media (max-width: 320px) {
      --before-left: 7%;
    }
    @media (max-width: 280px) {
      --before-left: 5.9%;
    }

    @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      --before-left: 7.1%;
    }
    @media (min-width: 1740px) {
      --padding-y-sm: 25%;
      --padding-y-md: 25%;
      --before-left: 29.5%;
    }

}
html, body {
    max-width: 100%;
    overflow-x: hidden;
}

body{
    width:100%;
    max-width: 100vw;
    overflow-x:hidden;
    overflow-y:hidden;
}
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-decoration: none;
    margin: 0;
    padding: 0;
    line-height: 1.4;
}

h1, h2, h3 {
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
}

h1{font-size: 3rem}
h2{font-size: 1.8rem}
h3{font-size: 1.2rem; font-weight: 600;}


div, p, span, header, main, footer {font-family: 'Poppins', sans-serif;}

header {
    width: 100%;
}

main {
    width: 100%;
}

a {
    cursor: pointer;
}

`;

export default GlobalStyle;
