import React from 'react'

function ExplanationComponent({lifecycle, lifecycleDesc}) {
    return (
        <section className="explanation-container"> 
            <h2>{lifecycle}</h2>
            <p>{lifecycleDesc}</p>
        </section>
    )
}

export default ExplanationComponent
