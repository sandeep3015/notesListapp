import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
    return(
        <nav className='nav-header'>
            <ul className='nav-items-container'>
                <li className='nav-item'>
                    <Link to='/' className='link-item'>HomePage</Link>
                </li>
                <li>
                    <Link to='/form' className='link-item'>NoteFrom</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header