import './Navbar.scss'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function Navbar({categoriesList}) {

    return(
        <nav className='navbar'>
            <Link to='/' >
                <img src='https://fakeimg.pl/150x50'/>
            </Link>

            <Searchbar categoriesList={categoriesList}/>

            <div className='icons-nav'>
                <i className='bx bx-user'></i>
                <i className='bx bx-cart-alt cart' /**ajouter une autre icon pour panier remplis <i class='bx bxs-cart-alt' ></i> */></i>
            </div>
        </nav>
    )
}