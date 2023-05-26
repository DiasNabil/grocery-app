import './Navbar.scss'
import CartIcon from './Cart-icon'
import Searchbar from './Searchbar'
import CartDropDown from '../Cart/CartDropdown'

import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { ToggleCartContext} from '../Context/ToggleCartContext'



export default function Navbar({categoriesList}) {

    const { cart } = useContext(CartContext)
    const {toggleCart, setToggleCart} = useContext(ToggleCartContext)
    
    return(
        <nav className='navbar'>
            <Link to='/' >
                <img src='https://fakeimg.pl/150x50'/>
            </Link>

            <Searchbar categoriesList={categoriesList}/>

            <div className='icons-nav' onClick={()=> setToggleCart(true)}>
                <CartIcon cart={cart} />
            </div>

            <CartDropDown toggleCart={toggleCart} setToggleCart={setToggleCart} cart={cart} />
        </nav>
    )
}