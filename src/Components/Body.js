// eslint-disable-next-line
import React from 'react'
import Profile from './Profile'
import References from './References'
import Resume from './Resume'
import Projects from './Projects'
import {Route, Switch} from 'react-router-dom'

function Body() {
    return (
            <Switch>
                <div className='body-view'>
                    <Route exact path="/" component={ Profile }/>
                    <Route path="/references" component={ References }/>
                    <Route path="/resume" component={ Resume } />
                    <Route path="/projects" component={ Projects } />
                </div>

            </Switch>
    )
}

export default Body
