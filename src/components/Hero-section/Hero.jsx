import './Hero.scss'


export default function Hero({homePage}){

    let welcome = homePage.heroSection
    let promos = homePage.promoActu
    
    
    return (
        <div className="hero-container">
            <div className='welcome' style={{
                background: `url(${welcome.image.url})`,
                backgroundSize: 'cover',
            }} >
                <h1>{welcome.titre}</h1>
                <p>{welcome.texte}</p>
            </div>

            <div className='actu'>
                {promos.map(promo =>{
                    return (
                        
                        <div key={promos.indexOf(promo)} className={`actuCard num${promos.indexOf(promo)}`} style={{
                            background: `url(${promo.image.url})`,
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