import React from "react";

export default function Statistics ({good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage}){
    return(
        <>
        <h1>Statistics</h1>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {countTotalFeedback()}</div>
        <div>Positive Feedback: {countPositiveFeedbackPercentage()} %</div>
        </>)
}