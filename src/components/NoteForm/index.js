import {useState, useEffect} from 'react'

import './index.css'

const getNotesListFromLocalStorage = () => {
    let strigifiedNotesList = localStorage.getItem('notesList')
    let parsedNotesList = JSON.parse(strigifiedNotesList)

    if (parsedNotesList === null) {
        return []
    } else {
        return parsedNotesList
    }
}

const NoteForm = () => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [notesList, setNotesList] = useState(getNotesListFromLocalStorage())

    useEffect(() => {
        localStorage.setItem('notesList', JSON.stringify(notesList))
    }, [notesList])

    const onChangeTitle = event => {
        setInputTitle(event.target.value)
    }

    const onChangeDescription = event => {
        setInputDescription(event.target.value)
    }

    const onSubmitForm = event => {
        event.preventDefault()
        if (!inputTitle) {

        } else {
            let newNote = {
                title: inputTitle,
                description: inputDescription
            }
            setNotesList([...notesList, newNote])
            setInputTitle('')
            setInputDescription('')
        }
    }

    return(
        <div className='form-main-container'>
            <form className='form-container' onSubmit={onSubmitForm}>
                <h1 className='notes-heading'>Add New Notes</h1>
                <div>
                    <label htmlFor='title' className='input-label'>Title</label><br/>
                    <input
                        id='title'
                        type="text"
                        placeholder='title'
                        className='input-description'
                        onChange={onChangeTitle}
                        value={inputTitle}
                    />
                </div>
                <div>
                    <label htmlFor='description' className='input-label'>Description</label><br/>
                    <textarea
                        id='description'
                        type="textarea"
                        rows='6'
                        cols='6'
                        placeholder='description'
                        className='input-description'
                        onChange={onChangeDescription}
                        value={inputDescription}
                    >   
                    </textarea>
                </div>
                <button type='submit' className='new-notes-button'>Add Notes</button>
            </form>
        </div>
    )
}

export default NoteForm