import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url("https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css");

    *, *::before, *::after {
        box-sizing: border-box;
        
        margin: 0;
        padding: 0;
        border: 0;
    }
`;
