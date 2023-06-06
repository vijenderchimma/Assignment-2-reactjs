import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'
import ThemeContext from './context/ThemeContext'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
