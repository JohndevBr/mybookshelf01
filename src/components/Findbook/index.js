import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Container, Content } from './styles'

import api from '../../services/api'


export default function FindBook () {
    const [book, setBook] = useState('')
    const [ result, setResult] = useState([])

    function handleChange(event){
        const book = event.target.value

        setBook(book)
    }

    function handleSubmit(event){
        event.preventDefault()

        api.get(`${book}+inauthor`)
        .then( data => {
            console.log(data.data.items)
            setResult(data.data.items)
        })
    }

    return (
        <>
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

            <Content>
                <ul>
                    {result.map ( book => {
                        return <li key={book.id}>
                                    <div className="ImageBook">
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    </div>
                                    <div className="ContentBook">
                                        <h2> {book.volumeInfo.title} </h2>
                                        <h4> {book.volumeInfo.publishedDate} </h4>
                                    </div>
                                </li>
                    })}
                </ul>        
            </Content>
        </>
    )    
}

