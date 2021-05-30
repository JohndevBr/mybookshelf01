import styled from 'styled-components'

export const Container = styled.main`

    background: var(--blue-50);
    padding-top: 2rem;
  
    h1 {
        max-width: 1120px;
        margin: 0 auto;

        padding: 2rem 1rem 12rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #f7a203;

        span { 
            font-weight: normal;
            color: var(--shapes); 

        }
    }
`