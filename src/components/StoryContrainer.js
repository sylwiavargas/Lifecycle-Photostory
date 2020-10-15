import React from 'react'
import ImageComponent from './ImageComponent.js'
import ExplanationComponent from './ExplanationComponent.js'

function StoryContrainer({story: {img, imgDesc, lifecycle, lifecycleDesc}}) {
    return (
        <div className="story-container">
            <ImageComponent img={img} imgDesc={imgDesc}/>
            <ExplanationComponent lifecycle={lifecycle} lifecycleDesc={lifecycleDesc}/>
        </div>
    )
}

export default StoryContrainer

