import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdFavorite } from 'react-icons/md'
import Modal from 'react-modal'
import { Container, Content, ContentModal } from './styles'

import bookLogo from '../../assets/book.svg'
import closeImg from '../../assets/close.svg'


import api from '../../services/api'

Modal.setAppElement('#root');

export default function FindBook() {
    const [isDescriptionModalOpen, setisDescriptionModalOpen] = useState(false)
    const [book, setBook] = useState('')
    const [result, setResult] = useState([])
    const [isFavorite, setIsFavorite] = useState(false)
    const [modalBook, setModalBook] = useState([])

    function handleOpenDescriptionModal(id) {
        setisDescriptionModalOpen(true)
        setModalBook(result.filter(book => book.id === id)[0])
    }

    function handleCloseDescriptionModal() {
        setisDescriptionModalOpen(false)
    }



    function handleSetFavorite() {
        setIsFavorite(true)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        await api.get(`${book}`)
            .then(data => {
                console.log(data.data.items)
                setResult(data.data.items, isFavorite)

                setBook('')
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
                            onChange={(e) => setBook(e.target.value)}
                            value={book}
                        />
                        <button type="submit" onClick={handleSubmit}>
                            <FiSearch size={16} color="#fff" />
                        </button>
                    </div>

                </header>

            </Container>

            <Content >
                <ul>
                    {result.map(book => {
                        return <li key={book.id} onClick={() => handleOpenDescriptionModal(book.id)} >

                            <section>
                                <div className="ImageBook">
                                    <MdFavorite className="heart-icon" size={32} onClick={handleSetFavorite} />
                                    <img
                                        src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : bookLogo}
                                        alt={book.volumeInfo.title}
                                    />
                                </div>
                                <div className="ContentBook">
                                    <h2> {book.volumeInfo.title} </h2>
                                    <h4> {book.volumeInfo?.publishedDate} </h4>
                                </div>
                            </section>
                        </li>
                    })}

                </ul>
            </Content>

            <Modal
                isOpen={isDescriptionModalOpen}
                onRequestClose={handleCloseDescriptionModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <ContentModal>
                    <img
                        className="modal-bookImage"
                        src={modalBook.volumeInfo?.imageLinks 
                                ? modalBook.volumeInfo.imageLinks.smallThumbnail : bookLogo} 
                        alt={modalBook.volumeInfo?.title} 
                    />

                    <h2>Descrição do livro </h2>

                    <span>{modalBook.volumeInfo?.title}</span>

                    <p> { modalBook.volumeInfo ? modalBook.volumeInfo?.description : "Descrição não disponível"} </p>

                    <button
                        type="button"
                        onClick={handleCloseDescriptionModal}
                        className="react-modal-close"
                    >
                        <img src={closeImg} alt="Fechar Modal" />
                    </button>
                </ContentModal>
            </Modal>
        </>
    )
}

