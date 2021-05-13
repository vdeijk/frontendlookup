import "./styles/main.scss";
import { Homepage, Wordpage, ErrorPage, About, Resources } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Searchbar from "./components/organisms/Searchbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/wordpage/:id">
          <Searchbar />
          <Wordpage />
        </Route>
        <Route path="/about">
          <Searchbar />
          <About />
        </Route>
        <Route path="/resources">
          <Searchbar />
          <Resources />
        </Route>
        <Route path="*">
          <Searchbar />
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
