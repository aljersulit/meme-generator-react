import { useState } from 'react'
import memeData from '../memeData'

export default function Meme() {
    const [memeImg, setMemeImg] = useState("https://i.imgflip.com/1ur9b0.jpg");

    function randomMemeImg() {
        const memesArray = memeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        setMemeImg(memesArray[randomIndex].url);
    }
    
    return (
      <article>
        <div className="input-container">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button type="button" onClick={randomMemeImg}>Get a new meme image 🖼</button>
        <img src={memeImg} alt="meme image" className="meme-image" />
      </article>
    );
}