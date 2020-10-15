import React from 'react'

function ImageComponent({img, imgDesc}) {
    return (
        <figure className="image-container">
            <img src={`img/${img}.jpg`} alt=""/>
            <figcaption className="description">
                {imgDesc}
            </figcaption>
        </figure>
    )
}

export default ImageComponent

