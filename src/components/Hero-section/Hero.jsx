import Actu from './Actu'
import './Hero.scss'


export default function Hero({homePage}){


    if(homePage){
        let welcome = homePage.heroSection[0]
        let promos = homePage.promoActu
  
        return (
            <div className="hero-container">
                <div className='welcome' style={{
                    background: `url(${welcome.image})`,
                    backgroundSize: 'cover',
                }}>
                    <h1>{welcome.titre}</h1>
                    <p>{welcome.texte}</p>
                </div>

                <Actu className='actu' promos={promos}/>
            </div>
        )
    }

}