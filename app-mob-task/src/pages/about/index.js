import React from 'react'
import {Link} from 'react-router-dom';

function About() {
    return (
        <div>
            <h3>It's work!</h3>
            <p>This is about page.</p>
            <Link to="/">Home</Link>
            <Link to="/about">About Page</Link>
            <a href="/angular">(Angular)</a>
        </div>
    )
}

export default About;
