import { Component } from 'react'
import FeedBackOptions from './FeedBackOptions'
import Statistics from './Statistics'


class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
		options: []
	  }

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}
	render() {
		return (
<>
<FeedBackOptions/>
<Statistics/>
</>
    )}
}


export default App;
