import { Component } from 'react'

class App extends Component {
	state = {
		isShowModal: false,
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
</>
    )}
}

export default App;
