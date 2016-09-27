import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
              <div id="page" className="logo"></div>
                <h1>Employee Web App</h1>
                <p>Spring Boot, React, Redux, ES6 for modern web app.</p>
                <Link to="about" className="btn btn-primary -btn-lg">Learn More</Link>
            </div>
         );
    }
}

export default HomePage;
