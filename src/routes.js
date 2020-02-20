import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Login from './Components/Login/Login'

export default (

    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
    </Switch>

)