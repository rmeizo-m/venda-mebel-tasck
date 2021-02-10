import React from 'react';
import {BrowserRouter as Routers, Switch, Route} from 'react-router-dom';
import Auth from "./pages/Auth";

function App() {
  return (
    <Routers>
      <Switch>
        <Route path="/" component={Auth} />
      </Switch>
    </Routers>
  );
}

export default App;
