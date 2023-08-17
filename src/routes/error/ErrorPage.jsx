import { useState } from 'react'
import './ErrorPage.scss'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage(){

    const [isHover, setHover] = useState(false)
    const navigate = useNavigate()

    return (

        <div className='errorContainer'>
        <h2>Oops !</h2>
        <h3>Cette page n'est pas disponible</h3>
        <p>Il semblerait que cette page n'existe pas...</p>
        <button onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)} onClick={()=> navigate('/')}>
            <i className={`${!isHover ? 'none': null} bx bx-left-arrow-alt`}></i> 
            Retour 
        </button>
        </div>
    )
}