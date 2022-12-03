import trollIcon from '../images/troll-face.png';

export default function Header() {
    return (
        <header>
            <div>
                <img src={trollIcon} alt="meme icon" className='meme-icon' />
                <h1>Meme Generator</h1>
            </div>
            <h2>React Course-Project 3</h2>
        </header>
    )
}