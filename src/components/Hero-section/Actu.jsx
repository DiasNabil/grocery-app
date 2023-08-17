import { useContext } from 'react'
import './Hero.scss'
import { AppContext } from '../Context/AppContext'

export default function ({promos}){

    const {Desktop, Mobile} = useContext(AppContext)

    if(promos){

        const actuDesktop = 
            <div className='actu '>
                    {promos.map(promo =>{
                        return (

                            <div key={promos.indexOf(promo)} className={`actuCard num${promos.indexOf(promo)}`} style={{
                                background: `url(${promo.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <h2>{promo.titre}</h2>
                                <p>{promo.texte}</p>
                                {promo.cta.lien !== null && <a href={promo.cta.lien} target="_blank" ><button className='cta'>{promo.cta.texte}</button></a>}
                            </div>
                        )
                    })}
            </div>

        const actuMobile = 
            <div className='actu actu-mobile'>
                        {promos.map(promo =>{
                            return (

                                <div key={promos.indexOf(promo)} className={`actuCard num${promos.indexOf(promo)}`} style={{
                                    background: `url(${promo.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <h2>{promo.titre}</h2>
                                    <p>{promo.texte}</p>
                                    {promo.cta.lien !== null && <a href={promo.cta.lien} target="_blank" ><button className='cta'>{promo.cta.texte}</button></a>}
                                </div>
                            )
                        })}
            </div>


        return (
            <>
                <Desktop>{actuDesktop}</Desktop>
                <Mobile>{actuMobile}</Mobile>
            </>
            
        )
    }
}
