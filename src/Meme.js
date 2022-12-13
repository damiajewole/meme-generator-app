import React from 'react';
import './style.css';

export default function Meme() {
    const[memeText, setMemeText] = React.useState({
        textOne: "",
        textTwo: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const[memePic, setmemePic] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setmemePic(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage(event) {
        const randomNumber = Math.floor(Math.random() * memePic.length)
        const url = memePic[randomNumber].url
        setMemeText(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })) 
        // to prevent the page from reloading each time I click the button
        event.preventDefault();
    }

    function handleChange(event){
        setMemeText(prevMemeText => ({
                ...prevMemeText,
                [event.target.name] : event.target.value
            }))    
    }

    return(
        <div className="body">
            <form className="form">
                <div className="inputText">
                    <input className="input"
                        type="text"
                        name="textOne"
                        value={memeText.textOne}
                        onChange={handleChange}
                    />
                    <input className ="input"
                        type="text"
                        name="textTwo"
                        value={memeText.textTwo}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image🖼️</button>
            </form>
            <div className="picClass">
                <img src={memeText.randomImage} className="memePic"></img>
                <p className="topText">{memeText.textOne}</p>
                <p className="bottomText">{memeText.textTwo}</p>
            </div>                
        </div>
    )
}