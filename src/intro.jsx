import React from "react";
import cards from "./cards";

const Intro = () => {
    return (
        <>
        <div className="bg-slate-400 m-auto max-w-48 rounded-md mb-1">
            <h1 className="text-lime-100">Learn Chemistry!</h1>
        </div>
        <div className="justify-center rounded-md bg-slate-400 max-w-[4000px] inline-grid mt-6">
            <p1 className = "text-lime-100 my-2 mx-2">Learn the core parts of Chemistry with these cards</p1>
            <p1 className = "text-lime-100 my-2">Number of cards in this set: {cards.length}</p1>
        </div>
        </>
    )
}

export default Intro