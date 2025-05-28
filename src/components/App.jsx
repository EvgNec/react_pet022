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
		bad={bad} />
      </>
    );
  }
}

export default App;
