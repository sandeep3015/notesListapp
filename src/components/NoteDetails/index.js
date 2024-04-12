import { MdDelete } from "react-icons/md"
import './index.css'

const NoteDetails = props => {
    const {noteDetails, deleteTodo} = props
    const {id, title, description} = noteDetails

    const onClickDeleteTodo = () => {
        deleteTodo(id)
    }
    return (
            <li className='list-item'>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
                <button type="button" className='delete-button' onClick={onClickDeleteTodo}><MdDelete className='delete'/></button>
            </li>
    )
}

export default NoteDetails