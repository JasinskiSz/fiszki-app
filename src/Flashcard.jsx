import { useState } from "react";

function Flashcard() {
    const [isFlipped, setIsFlipped] = useState(false); // czy karta jest odwrócone?

    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="flashcard">
            {/* To się nazywa: Conditional rendering */}
            {isFlipped ? <p>Pytanie</p> : <p>Odpowiedź</p>}
            <button onClick={handleFlip}>Odwróć kartę</button>
        </div>
    )
}

export default Flashcard;