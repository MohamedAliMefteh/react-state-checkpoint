import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer who loves creating beautiful and functional web applications. Always eager to learn new technologies and solve interesting problems.',
        imgSrc: 'person.jpg',
        profession: 'Software Engineer'
      },
      shows: false,
      mountTime: new Date(),
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        timeInterval: Math.round((new Date() - this.state.mountTime) / 1000)
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="App">
        <p className="timer">Component mounted {timeInterval} seconds ago</p>
        
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile-container">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p><strong>{person.profession}</strong></p>
            <p>{person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;