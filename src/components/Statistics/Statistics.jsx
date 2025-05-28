import React from "react";

export default function Statistics ({good, neutral, bad}){
    return(
        <>
        <h1>Statistics</h1>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        </>)
}