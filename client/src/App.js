import "./styles/main.scss";
import Homepage from "./pages/Homepage";
import Wordpage from "./pages/Wordpage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Homepage />
        </Route>
        <Route path="/wordpage">
          <Wordpage />
        </Route>
        <Route path="*">
          <p>Error</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
