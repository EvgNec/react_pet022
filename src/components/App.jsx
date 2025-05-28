import { Component } from 'react';
import FeedBackOptions from './FeedBackOptions';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //   handleLeavFeedback = (option) => {
  // 	this.setState( prevState => ({
  // 		[option]: prevState[option] + 1,
  // 	  }));
  //   }

  handleLeavFeedback = option => {
    this.setState(prevState => {
      console.log('Option:', option);
      console.log('Previous value:', prevState);

      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage= () => {
    const total = this.countTotalFeedback();
    if (total === 0) return 0;
  
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    // -- Mасив options, який містить усі ключі (властивості) об'єкта this.state
    // -- Для динамічного рендеру кнопок або компонентів по іменах стану
    const options = Object.keys(this.state);
    return (
      <>
        <FeedBackOptions
          options={options}
          onLeaveFeedback={this.handleLeavFeedback}
        />
        <Statistics 
		good={good} 
		neutral={neutral} 
		bad={bad} 
    countTotalFeedback={this.countTotalFeedback}  
    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} 
    />
      </>
    );
  }
}

export default App;
