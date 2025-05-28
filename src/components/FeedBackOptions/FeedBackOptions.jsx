import React from "react";

export default function FeedBackOptions ({options, onLeaveFeedback}){
    return(
        <>
        <h1>Please</h1>
        <ul>
{options.map((option) => 
(<li key={option}>
    <button onClick={()=> onLeaveFeedback(option)}>{option}</button>
</li>   
)
)}
</ul>
        </>
    )
}