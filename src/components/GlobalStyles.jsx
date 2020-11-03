import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        *{
            font-family: 'Nunito Sans', sans-serif;
            box-sizing: border-box;
            outline: none;
        }
    }
`

export default GlobalStyles
