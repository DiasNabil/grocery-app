import './Navbar.scss'
import CartIcon from './Cart-icon'
import Searchbar from './Searchbar'
import CartDropDown from '../Cart/CartDropdown'

import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { ToggleContext} from '../Context/ToggleContext'
import { AppContext } from '../Context/AppContext'



export default function Navbar({categoriesList}) {

    const { cart } = useContext(CartContext)
    const {toggleCart, setToggleCart} = useContext(ToggleContext)
    const {toggleSearchBar, setToggleSearchBar} = useContext(ToggleContext)
    const {setToggleCategories} = useContext(ToggleContext)
    const {Desktop, Mobile} = useContext(AppContext)

    const navDesktop = 
    <nav className='navbar'>
        <Link className='nav-link' to='/' >
            <img className='nav-logo' src='https://fakeimg.pl/150x50'/>
        </Link>

        <Searchbar categoriesList={categoriesList}/>

        <div className='icons-nav' onClick={()=> setToggleCart(true)}>
            <CartIcon cart={cart} />
        </div>

        <CartDropDown toggleCart={toggleCart} setToggleCart={setToggleCart} cart={cart} />
    </nav>

    const navMobile = 
    <nav className='navbar nav-mobile'>
        <div className={`navbar-left + ${toggleSearchBar ? 'none' : null}`}>
            <i className='bx bx-menu' onClick={() => setToggleCategories(prev => !prev)}></i>
            <Link className='nav-link' to='/' >
                <img className='nav-logo' src='https://fakeimg.pl/150x50'/>
            </Link>
        </div>

        <Searchbar categoriesList={categoriesList}/>

        <div className={`navbar-right + ${toggleSearchBar ? 'none' : null}`}>
            <i className='bx bx-search' onClick={() => setToggleSearchBar(true)} ></i>
            <div className='icons-nav' onClick={()=> setToggleCart(true)}>
                <CartIcon cart={cart} />
            </div>
        </div>

        <CartDropDown toggleCart={toggleCart} setToggleCart={setToggleCart} cart={cart} />
    </nav>
    
    return(
        <>
        <Desktop>{navDesktop}</Desktop>
        <Mobile>{navMobile}</Mobile>
        </>
    )
}