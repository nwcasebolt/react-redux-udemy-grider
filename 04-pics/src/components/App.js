import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        Axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID AQycZV7k9t5wSKEY6Xf8iZHxDcFZAOAHnPK9kfU-efQ'
            }
        });
    }

    render() {
        return <div className="ui container" style={{ "marginTop": "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
    }
}

export default App;