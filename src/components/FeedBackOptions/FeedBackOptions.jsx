import React from 'react';
import css from './FeedBackOptions.module.css';

export default function FeedBackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={css.listButton}>
        {options.map(option => (
          <li className={css.itemButton} key={option}>
            <button
              onClick={() => onLeaveFeedback(option)}
              className={`${css.button} ${css[option]}`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
