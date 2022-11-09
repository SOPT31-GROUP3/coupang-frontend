import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};

    a{
        text-decoration:none;
        color:inherit;
    }
    
    *{
        box-sizing:border-box;
    }
`;

export default globalStyles;
