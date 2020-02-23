import React, { Component } from 'react'
import ImageComponent from './ImageComponent.js'
import ExplanationComponent from './ExplanationComponent.js'


export class StoryContrainer extends Component {

    render() {
        let {img, imgDesc, lifecycle, lifecycleDesc} = this.props.story
        
        return (
            <div className="story-container">
                <ImageComponent img={img} imgDesc={imgDesc}/>
                <ExplanationComponent lifecycle={lifecycle} lifecycleDesc={lifecycleDesc}/>
            </div>
        )
    }
}

export default StoryContrainer
