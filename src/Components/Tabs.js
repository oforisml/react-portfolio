import React, { Component } from 'react'
// eslint-disable-next-line
import { Link, NavLink} from 'react-router-dom';


import '../App.css'
export class Tabs extends Component {
   
    render() {
        return (
                <div className="tabs">
                        <Link  exact to="/" >Profile</Link> 
                        <Link to="../files/resume.pdf" target="_blank" download>Resume/CV</Link> 
                        <Link to="/projects">Projects</Link>
                        <Link to="/references">Referees</Link>
                </div>
                    
        )
    }
}

export default Tabs
