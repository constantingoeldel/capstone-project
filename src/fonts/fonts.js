import { createGlobalStyle } from 'styled-components'

import unfinished from './unfinished.woff'
import unfinished2 from './unfinished.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Title';
        src: local('Title'), local('Title'),
        url(${unfinished2}) format('woff2'),
        url(${unfinished}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`
