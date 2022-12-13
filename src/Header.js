import React from 'react';
import './style.css';

export default function Header(){
    return(
        <div className="header">
            <div className = "logo">
                <img src="./Troll Face.png" className="pic"/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}
