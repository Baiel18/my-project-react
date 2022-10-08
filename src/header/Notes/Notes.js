import React, { useEffect, useState } from "react";
import "./Notes.css"

function Notes() {
    const [value, setValue] = useState('')
    const [cardr, setCards] = useState(() => {
        let cards = JSON.parse(localStorage.getItem('card'))
        return cards || []
    })
    useEffect(() => {
        localStorage.setItem('card', JSON.stringify(cardr))
    }, [cardr])

    function handlesumbit(e) {
        e.preventDefault()
        if (value) {
            const newTodo = { id: Math.round(Math.random() * 100), title: value, complited: false }
            setCards((getvalue) => [...getvalue, newTodo])
            setValue('')
        }

    }
    function deleteRemove(id) {
        setCards(cardr.filter(card => card.id !== id))
    }
    return (
        <div className="Notes">
            <form onSubmit={(e) => handlesumbit(e)}>
                <input className="notes"
                    type="text"
                    name="name"
                    placeholder="text..."
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                /><button className="btn">on</button><br />
            </form>
            
                <div className="cards  container">
                    {cardr.map(card => {
                        return (
                            <div className="twoCard">
                                <h3 className="card" key={card.id}>{card.title}</h3>
                                <button className="cardDelete" onClick={() => deleteRemove(card.id)}>delete</button>
                            </div>
                        )
                    })}
                </div>   
        </div>
    )
}
export default Notes