import React from 'react';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  let percent = countPositiveFeedbackPercentage();
  let className = '';
  if (percent < 50) {
    className = css.low;
  } else if (percent < 75) {
    className = css.medium;
  } else {
    className = css.high;
  }

  return (
    <>
      <ul className={css.feedbackList}>
        <li className={css.listItem}>Good: {good}</li>
        <li className={css.listItem}>Neutral: {neutral}</li>
        <li className={css.listItem}>Bad: {bad}</li>
        <li className={css.listItem}>Total: {countTotalFeedback()}</li>
        <li className={`${css.feedback} ${className}`}>
          Positive Feedback: {countPositiveFeedbackPercentage()} %
        </li>
      </ul>
    </>
  );
}
