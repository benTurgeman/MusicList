import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Components/Home'
import MusicianPage  from './Components/MusicianPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/MusicList' component={Home}></Route>
          <Route path='/MusicList/:id' component={MusicianPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;