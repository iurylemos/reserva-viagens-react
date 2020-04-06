import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './view/home';
import Reservas from './view/reservas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservas" exact component={Reservas} />
    </Switch>
  )
}