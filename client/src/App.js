import React, { Component } from 'react';
import Tooltip from './components/tooltip'
import './App.css';

class App extends Component {
  // Initialize state
  state = { passwords: [], copied : "Click here to copy!" }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  copy = password => {
    navigator.clipboard.writeText(password);
    this.setState({copied:"Copied successfully!"})
    setTimeout(()=>{this.setState({copied:"Click here to copy!"})},2000)
  }

  render() {
    const { passwords } = this.state;
    const positions = ["top","right","bottom","left"]
    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {passwords.map((password, index) =>
                <li onClick={()=>this.copy(password)} key={index}>
                  <Tooltip class={positions[Math.floor(Math.random()*positions.length)]}>{this.state.copied}</Tooltip>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              +Get More+
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
