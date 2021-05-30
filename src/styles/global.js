import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
    --background: #EBEBEB;
    --shapes: #FFFFFF;

    --blue-50: #718096;
    --yellow: #f7a203;
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

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: scroll;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 600px;
        background: var(--background);
        padding: 2rem;
        position: relative;
        border-radius: 7rem 0.5rem;
    }

    .react-modal-close {
       position: absolute;
       right: 1.5rem;
       top: 1.5rem;
       border: 0;
       background: transparent;
       transition: filter 0.2s; 

       &:hover  {
        filter: brightness(0.6);
       }
    }
`