import { injectGlobal } from 'styled-components';

import aileronwoff from 'fonts/aileron-bolditalic-webfont.woff';
import aileronwoff2 from 'fonts/aileron-bolditalic-webfont.woff2';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@font-face {
  font-family: 'aileronbold_italic';
  src: url(${aileronwoff2}) format('woff2'),
       url(${aileronwoff}) format('woff');
  font-weight: normal;
  font-style: normal;
}

.freshColorAnimiation {
  background: linear-gradient(314deg, #00fbba, #e30000, #b90089, #1534df, #47e100, #fde209);
  background-size: 1200% 1200%;

  -webkit-animation: MiloFreshColorAnimation 7s ease infinite;
  -moz-animation: MiloFreshColorAnimation 7s ease infinite;
  -o-animation: MiloFreshColorAnimation 7s ease infinite;
  animation: MiloFreshColorAnimation 7s ease infinite;
}

@-webkit-keyframes MiloFreshColorAnimation {
    0%{background-position:65% 0%}
    50%{background-position:36% 100%}
    100%{background-position:65% 0%}
}
@-moz-keyframes MiloFreshColorAnimation {
    0%{background-position:65% 0%}
    50%{background-position:36% 100%}
    100%{background-position:65% 0%}
}
@-o-keyframes MiloFreshColorAnimation {
    0%{background-position:65% 0%}
    50%{background-position:36% 100%}
    100%{background-position:65% 0%}
}
@keyframes MiloFreshColorAnimation {
    0%{background-position:65% 0%}
    50%{background-position:36% 100%}
    100%{background-position:65% 0%}
}
`;
