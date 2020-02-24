import React, { Component } from 'react'

export class ExplanationComponent extends Component {
    render() {
        let {lifecycle, lifecycleDesc} = this.props
        return (
            <div className="explanation-container"> 
                <h2>{lifecycle}</h2>
                <p>{lifecycleDesc}</p>
            </div>
        )
    }
}

export default ExplanationComponent
