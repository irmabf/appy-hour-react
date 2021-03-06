import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Tours from './components/Tours'
import RecordTour from './components/RecordTour';
import CreateTour from './components/CreateTour';
import Profile from './components/Profile';
import Options from './components/Options';
import NavbarMenu from './components/Navbar/NavbarMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <NavbarMenu />

      </header>
      <main className="App-main">
        <Switch>
          <Route exact path="/tours" component={Tours}></Route>
          <Route exact path="/record" component={RecordTour}></Route>
          <Route exact path="/create" component={CreateTour}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/options" component={Options}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
