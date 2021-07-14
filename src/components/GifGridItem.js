import React from 'react'

export const GifGridItem = ( { title, url } ) => {
    return (
            <div className="card animate__animated animate__fadeIn">
                <a href={url} target="_blank" rel="noreferrer">
                    <img src={ url } alt={ title } />
                </a>
                <p>{ title }</p> 
            </div>
    )
}
