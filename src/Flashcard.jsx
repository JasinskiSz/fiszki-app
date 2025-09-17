import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer }) {
    const [isFlipped, setIsFlipped] = useState(false); // czy karta jest odwrócone?
    const [counter, setCounter] = useState(0) // licznik - tu trzymamy ile razy kliknęliśmy

    function handleFlip() {
        setIsFlipped(!isFlipped)
        setCounter(counter + 1)
    }

    return (
        <div className="flashcard">
            {/* To się nazywa: Conditional rendering */}
            {isFlipped ? <p>{answer}</p> : <p>{question}</p>}
            <button onClick={handleFlip}>Odwróć kartę</button>
            <p>karta odwrócona {counter} razy</p>
        </div>
    )
}

export default Flashcard;