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
                }} >
                    <h1>{welcome.titre}</h1>
                    <p>{welcome.texte}</p>
                </div>

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
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}