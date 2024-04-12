import {Component} from 'react'

import NoteForm from '../NoteForm'
import NoteDetails from '../NoteDetails'
import './index.css'

let initialNotesList = [
    {
        id: 0,
        title: 'HTML',
        description: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.',
    },
    
    {
        id: 1,
        title: 'JavaScript',
        description: 'An object-oriented computer programming language commonly used to create interactive effects within web browsers.'
    },

    {
        id: 2,
        title: 'React JS',
        description: 'ReactJS, also known as React, is a popular JavaScript library for building user interfaces.'
    }

]

class HomePage extends Component {
    state = {
        notesList: initialNotesList,
        isAddNotesButtonClicked: false,
        searchInput: '',
    }

    onChangeSearchInput = event => {
        this.setState({
            searchInput: event.target.value,
        })
    }

    onDeleteTodo = (id) => {
        const {notesList} = this.state
        const filteredList =  notesList.filter(eachItem =>
            id !== eachItem.id
        )
        console.log(filteredList)
        this.setState({
            notesList: filteredList,
        })
    }

    onClickDisplayNotesForm = () => {
        this.setState({
            isAddNotesButtonClicked: true,
        })
    }

    render(){
        const {notesList, isAddNotesButtonClicked, searchInput} = this.state
        const searchResults = notesList.filter(eachItem => 
            eachItem.title.toLowerCase().includes(searchInput)
        )
        return(
            <div className='home-page-container'>
                {isAddNotesButtonClicked && 
                        (<NoteForm />)
                }
                {!isAddNotesButtonClicked && (
                    <>
                    <input
                        type='search'
                        placeholder='search by title'
                        className='search-input'
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                    />
                    <ul className='notes-list-container'>
                        {searchResults.map(eachItem => (
                            <NoteDetails key={eachItem.id} noteDetails={eachItem} deleteTodo={this.onDeleteTodo}/>
                        ))}
                    </ul>
                    <button type='button' className='new-notes-button' onClick={this.onClickDisplayNotesForm}>New Notes</button>
                    </>  
                )}   
            </div>
        )
    }
}

export default HomePage