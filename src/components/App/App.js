import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => {
        return this.setState({urls: data.urls})
      })
  }

  addURLS = (newURL) => {
    postUrls(newURL)
      .then(data => this.setState({urls: [...this.state.urls, data]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrls={this.addURLS}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
