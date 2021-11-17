import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
