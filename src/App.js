import { Router, Switch, Route } from "react-router-dom";
// import history from "./services/history";
import createBrowserHistory from "history/createBrowserHistory";

import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";

const history = createBrowserHistory({ forceRefresh: true });

function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
