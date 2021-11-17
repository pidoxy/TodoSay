import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" render={() => <Auth><Dashboard /></Auth>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
