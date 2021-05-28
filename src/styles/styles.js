import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
    --blue: #273FAD;
    --green: #3FAD27;
    --red: 	#ad273f;
    --background: #EBEBEB;
    --shapes: #FFFFFF;
    --text-title: #3D3D4D;
    --text: #1C1C29;
    --text-light: #A09CB1;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smooth: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`