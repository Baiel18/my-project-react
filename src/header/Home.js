import React from "react";
import "./Home.css"
import Todo from "./Todo"
import Calc from "./fail-calc/Calc"
import Notes from "./Notes/Notes"

function Home(){
    return(
        <div className="homeContent">
            <h1 className="topic">Notes</h1>
            <Todo />
            <Notes />
            <Calc />
        </div>
    )
}
export default Home