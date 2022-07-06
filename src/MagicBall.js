import { useState } from 'react';
import './index.css';
import MagicButton from './scripts/MagicButton';
import RandomQuote from './scripts/RandomQuote';

function MagicBall() {
    //empty quotes
    const [quotes, changeQuote] = useState([
        `yes`,
        `no`,
        `maybe`,
        `eh idk`,
        `ask again`,
        `wow maybe`,
        `indeed`,
        `perhaps it is true`,
    ]);
    const [num, changeNum] = useState(0);
    console.log(quotes);

    const handleClick = () => {
        let randomNum = Math.floor(Math.random() * quotes.length);
        changeNum(randomNum);
    };

    return (
        <div className="magicBall">
            <RandomQuote quotes={quotes} number={num} />
            <MagicButton onClick={handleClick} />
        </div>
    );
}

export default MagicBall;
