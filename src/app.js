import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VSCode from 'Components/vscode';
import Portfolio from 'Components/Portfolio';

const App = () => (
  <Router>
    <div className="h-full w-full bg-black text-white flex flex-col">
      <Switch>
        {/* Standalone portfolio homepage */}
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        
        {/* VS Code clone workspace */}
        <Route path={["/", "/files", "/search", "/git", "/debugger", "/extension"]}>
          <div className="h-full w-full select-none">
            <VSCode />
          </div>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
