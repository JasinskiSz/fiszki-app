import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer }) {
    const [isFlipped, setIsFlipped] = useState(false); // czy karta jest odwrócone?

    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="flashcard">
            {/* To się nazywa: Conditional rendering */}
            {isFlipped ? <p>{answer}</p> : <p>{question}</p>}
            <button onClick={handleFlip}>Odwróć kartę</button>
        </div>
    )
}

export default Flashcard;