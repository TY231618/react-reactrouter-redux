import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <h1>React Starter</h1>
        <p>React App with webpack and npm scripts to get up and running quickly</p>
        <Link to="about" className="btn btn-primary">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;