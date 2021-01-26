import React from 'react'

const Banner = () => {
    return (
        <div className="banner">
        <div className="text">
            <h1>Hola, soy Jose Rios</h1>
            <h4>Y estos son mis proyectos:</h4>
        </div>
        <style>
        {`
            
        .banner{
                width:100vw;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                background:white;
        }
        .text{  
                width:500px;
                height:300px;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-flow:column;
                border:5px solid #ebebeb;
                padding:2em;
                border-radius:1em;
        }
        `}
        </style>
        </div>
    )
}

export default Banner
