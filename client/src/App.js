import "./styles/globalStyles.scss";
import {
  Homepage,
  ResultPage,
  ErrorPage,
  AboutPage,
  ResourcesPage,
} from "./pages";
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
          <ResultPage />
        </Route>
        <Route path="/about">
          <Searchbar />
          <AboutPage />
        </Route>
        <Route path="/resources">
          <Searchbar />
          <ResourcesPage />
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
