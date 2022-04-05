import React from 'react'

export default function Meme() {
    return (
        <main>
            <form className="meme--form">
                <input className="meme-input-box" type="text" placeholder="upper text" />
                <input className="meme-input-box" type="text" placeholder="lower text" />
                <button className="meme-submit-button">Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}