import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {

  render() {
    return (

      <div className="jumbotron">
        <h1>Pluralsight Admi</h1>
        <p>React, Redux, ES6 and React-Router form ultra responsive web apps</p>
        <Link to="about" className="btn btn-primary">Learn More</Link>
      </div>
    )
  }
}

export default HomePage;