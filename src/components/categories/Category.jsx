import React from 'react'

export default function Category({category}) {
    const {title, imgUrl} = category

    return(
        <div className='category-container'>
            <div 
            className='background-image' 
            style={{backgroundImage : `url(${imgUrl})`}}
            />

            <div className='category-body-container'>
                <h2>{title}</h2>
            </div>
        </div>
    )

}