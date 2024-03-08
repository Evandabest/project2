import React from "react";
import { useState } from "react";



/*const Card = ({Front, Back}) => {
    const [show,SetShow] = useState(false)

    const change = () => {
        SetShow(!show)
    }

    if (show === false) {
        return (
            <>
                <div onClick={change} className="bg-blue-200 my-10 inline-grid h-72 w-[650px] rounded-lg">
                    <h1 className="m-auto font-medium text-2xl">{Front}</h1>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div onClick={change} className="bg-blue-200 my-10 inline-grid h-72 w-[650px] rounded-lg">
                    <h1 className="m-auto font-medium">{Back}</h1>
                </div>
            </>
        )
    }
}*/

const Card = ({Front, Back}) => {
    return (
        <>
        <div className="bg-transparent my-10 inline-grid h-72 w-[650px] rounded-lg border-[1px] border-[solid] border-[#f1f1f1] [perspective:1000px]">
            <div className="relative w-full h-full text-center bg-sky-600 [transition:transform_0.7s] [transform-style:preserve-3d] active:[transform:rotateX(180deg)] rounded-lg">
                <div className="absolute w-full h-full innerCard">
                    <h1 className="mt-28 font-medium text-2xl text-[black] mx-2">{Front}</h1>
                </div>
            <div className="absolute w-full h-full bg-[dodgerblue] text-[white] [transform:rotateX(180deg)] rounded-lg innerCard">
                <h1 className="mt-28 font-medium mx-2">{Back}</h1>
            </div>
        </div>
        </div>
        </>
    )

}

export default Card