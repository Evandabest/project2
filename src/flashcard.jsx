import React from "react";
import { useState } from "react";
import Card from "./card";
import cards from "./cards";

function Gurn(min, max) {
    let numbers = [];
    for (let i = min; i <= max - 1; i++) {
        numbers.push(i);
    }

    let result = [];
    while (result.length < max) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers[randomIndex];
        result.push(randomNumber);
        numbers.splice(randomIndex, 1);
    }

    return result;
}

const paged = Gurn(0,cards.length)

const Flashcard = () => {
    const [Page,SetPage] = useState(0)

    const back = () => {
        if (Page >= 1) {
            SetPage(Page-1)
        }
    }

    const forward = () => {
        if (Page < paged.length - 1) { SetPage(Page+1) }
    }
    return (
        <>
        <div className="justify-center">
            <Card
            Front = {cards[paged[Page]].Front}
            Back = {cards[paged[Page]].Back}> 
            </Card>
        </div>
        <div>
            <button className = "mx-8 bg-orange-400 rounded-md w-24" onClick={back}>Back</button>
            <button className = "mx-8 bg-orange-400 rounded-md w-24" onClick={forward}>Next</button>
        </div>
        </>
    )
}

export default Flashcard