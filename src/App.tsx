import React from 'react';
import './App.css';
import './assets/main.css';
import { HashRouter,  Route, Switch } from 'react-router-dom';
import CovidRules from './components/CovidRules';
import Nav from './components/Nav';
import { CovidContexProvider } from './contex/CovidContex';
import CovidHistory from './components/CovidHistory';
import CovidStatistics from './components/CovidStatistics';

function App() {
  return (
    <HashRouter>
      <Nav />
      <CovidContexProvider>
        <Switch>
          <Route exact path="/" component={CovidRules} />
          <Route exact path="/history" component={CovidHistory} />
          <Route exact path="/statistics" component={CovidStatistics} />
        </Switch>
      </CovidContexProvider>
    </HashRouter>
  );
}

export default App;
