import React, { Component } from 'react'
import ProgressiveImage from "react-progressive-graceful-image";


export class ImageComponent extends Component {
    render() {
        let {img, imgDesc} = this.props
        return (
            <>
            <div className="image-container">
            <ProgressiveImage
                src="https://placehold.it/300x200/808080/808080/"
                placeholder="https://placehold.it/30x20/808080/808080/"
            >
                {src => <img src={`img/${img}.jpg`} alt="" />}
            </ProgressiveImage>
            </div>
            <div className="description">
                <p>{imgDesc}</p>
            </div>
            </>
        )
    }
}

export default ImageComponent
