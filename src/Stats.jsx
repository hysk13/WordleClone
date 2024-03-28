import './Styles/Stats.css';

export default function EndGUI({ win, tries, word, show, restartRound }) {

    const visible = (show) ? "flex" : "none";
    const plural = (tries == 0) ? "try" : "tries"; 

    if (win) {
        return (
            <div className="endgui-wrap" style={{display:visible}}>
                <div className='endgui-txt-wrap'>
                    Congrats! You guessed the word in {tries} {plural}! <br />
                    The word was "{word}".
                </div>
                <br />
                <button className="restartButton" onClick={restartRound}>Restart Round</button>
            </div>
        )
    } else {
        return (
            <div className="endgui-wrap" style={{display:visible}}>
                <div className='endgui-txt-wrap'>
                    Better luck next time... <br />
                    The word was "{word}". 
                </div>
                <br />
                <button className="restartButton" onClick={restartRound}>Restart Round</button>
            </div>
        )
    }

}