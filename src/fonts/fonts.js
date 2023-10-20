import { createGlobalStyle } from 'styled-components';

import Meridiana from './Meridiana.woff';
import Meridiana2 from './Meridiana2.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Meridiana';
        src: local('Meridiana'), local('Meridiana'),
        url(${Meridiana2}) format('woff2'),
        url(${Meridiana}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;