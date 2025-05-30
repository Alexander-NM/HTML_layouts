import imgAvatar from "../assets/img_avatar.png"
import "../styling/flip-card.css"

export default function FlipCard() {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={imgAvatar}
                        alt="Avatar"
                    />
                </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    )
}
