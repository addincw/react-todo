import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../components/layouts/AppHeader';

function About() {
    return (
        <React.Fragment>
            <AppHeader title={`About`}></AppHeader>
            <div className="card mb-3">
                <div className="card-content">
                    <p className="subtitle">Todo List</p>
                    <div className="content mb-5">
                        Todo list is simple application to make a list activity will do, with some of feature: 
                        <ul>
                            <li>filter activity</li>
                            <li>checklist activity when done</li>
                            <li>add activity</li>
                            <li>and remove activity</li>
                        </ul>
                    </div>

                    <p>This app build with react library and other third party library like bulma, fontawesome.</p>
                </div>
            </div>
            <div className="mt-5">
                <Link to="/">Home</Link>
            </div>
        </React.Fragment>
    )
}

export default About