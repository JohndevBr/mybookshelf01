import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdFavorite } from 'react-icons/md'
import Modal from 'react-modal'



import { Container, Content } from './styles'

import api from '../../services/api'


export default function FindBook () {
    const [ isDescriptionModalOpen, setisDescriptionModalOpen ] = useState(false)

    function handleOpenDescriptionModal(){
        setisDescriptionModalOpen(true)
    }

    function handleCloseDescriptionModal(){
        setisDescriptionModalOpen(false)
    }

    const [book, setBook] = useState('')
    const [ result, setResult] = useState([])
    const [ isFavorite, setisFavorite] = useState(false)
    function handleChange(event){
        const book = event.target.value

        setBook(book)
    }

    function handleSetFavorite() {
        setisFavorite(true)
    }

    function handleSubmit(event){
        event.preventDefault()

        api.get(`${book}+inauthor`)
        .then( data => {
            console.log(data.data.items)
            setResult(data.data.items, isFavorite)
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

            <Content >
                <ul>
                    {result.map ( book => {
                        return <li key={book.id} onClick={handleOpenDescriptionModal} >
                                    <Modal 
                                        isOpen={isDescriptionModalOpen} 
                                        onRequestClose={handleCloseDescriptionModal}
                                    >   
                                        <div className="Modal-content">
                                            <img src={ book.volumeInfo.imageLinks?.thumbnail } alt={book.volumeInfo.title} />
                                            <h2>Descrição do livro { book.volumeInfo.title }</h2>
                                            <p> { book.volumeInfo.description } </p>
                                        </div>

                                    </Modal>
                                    <section>
                                    <div className="ImageBook">
                                    <MdFavorite className="heart-icon" size={32} onClick={handleSetFavorite} />
                                    <img src={ book.volumeInfo.imageLinks.thumbnail } alt={book.volumeInfo.title} />
                                    </div>
                                    <div className="ContentBook">
                                        <h2> { book.volumeInfo.title } </h2>
                                        <h4> { book.volumeInfo.publishedDate } </h4>
                                    </div>
                                    </section>
                                </li>
                    })}
                    
                </ul>
                      
            </Content>
        </>
    )    
}

