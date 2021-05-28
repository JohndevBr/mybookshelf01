import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Container } from './styles'

import axios from 'axios'


export default function FindBook () {
    const [book, setBook] = useState('')
    const [ result, setResult] = useState([])

    function handleChange(event){
        const book = event.target.value

        setBook(book)
    }

    function handleSubmit(event){
        event.preventDefault()

        axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAus8q7Wr92etcjgDB_MvOzblDcRvxnO4M')
        .then( data => {
            console.log(data)
        })
    }

    return (
        <Container>
          <header>
            <h2>Busque seu Livro <span>Favorito</span></h2>

            <div>
              <input 
                type="text" 
                placeholder="Qual livro ler hoje?"
                onChange={handleChange}
              />
              <button type="submit" onClick={handleSubmit}>
                <FiSearch size={16} color="#fff"/>
              </button>
            </div>

          </header>

          
    
        </Container>
    )    
}

