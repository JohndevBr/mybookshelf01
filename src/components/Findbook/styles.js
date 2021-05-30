import styled from 'styled-components'

export const Container = styled.section`

    background: var(--shapes);
    border-radius: 2rem;
  
    margin-top: -10rem;
    padding: 70px 60px;
  
    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
  
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    
        h2 {
        color: var(--text-title);
        font-size: 2.25rem;
            span {
                color: #f7a203;
            }
        }

        div {
        display: flex;
        gap: 0.25rem;
        align-items: center;

        background: #fff;
        font-size: 16px;
      
        input {
            flex: 1;
            background: var(--background);
            border: 0;
            color: var(--text);
            padding: 12px 24px;
            
            border-radius: 8px;
            border: 0;
            
            &::placeholder {
            color: var(--text-light)
            }
        }

        button {
            font-weight: 600;
            border-radius: 8px;
            border: 0;
            background: #f7a203;
            color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;

            padding: 14px;
        }
    }
  }


`

export const Content = styled.main`
    ul {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        list-style: none;
        justify-items: center;
        gap: 0.5rem;
    }

    li {

        width: 30rem;
        height: 20rem;
        max-height: 25rem;

        .Modal-content {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            justify-items: center;
            align-items: center;
            background-color: #fff;


            border: 0.25rem solid rgba(242, 196, 56, 0.3);
            padding: 1rem;
            border-radius: 2rem;
            margin:1rem;

            cursor: pointer;

            :hover {
                border: 0.25rem solid rgba(242, 196, 56, 0.9);
                    }

            .ImageBook{ 
                position: relative;

                .heart-icon {
                    position: absolute;
                    top: -5px;
                    cursor: pointer;
                    transform: color 0.2s;

                    :hover {
                        color: rgba(255, 99, 71, 0.9);
                    }
                }

                img {
                    margin-top: 3rem;
                    width: 9rem;
                }
            }

            .ContentBook {
                margin-bottom: 1rem;
                h2 {
                    font-size: 0.95rem;
                }            
            }
        }
        
    }

    

    
   
        
`
