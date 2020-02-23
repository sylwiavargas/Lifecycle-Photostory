import React, { Component } from 'react'

export class ImageComponent extends Component {
    render() {
        let {img, imgDesc} = this.props
        return (
            <>
            <div className="image-container">
                <img src={`img/${img}.jpg`} alt=""/>
            </div>
            <div className="description">
                <p>{imgDesc}</p>
            </div>
            </>
        )
    }
}

export default ImageComponent
