import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    // React does not require an explicit definition of constructor
    constructor(props) {
        super(props);

        // this is the only time we do direct assignment to state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {

                // setState extended from React.Component, ONLY way to change state
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    // React requires a render method
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);