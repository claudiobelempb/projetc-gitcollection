import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeDefault } from "../pages/HomeDefault";
import { DashboardDefault } from "../pages/DashboardDefault";
import { RepositoryDefault } from "../pages/RepositoryDefault";

const AppRoutesDefault: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeDefault} />
        <Route path="/dashboard" component={DashboardDefault} />
        <Route
          path="/repositories/:repository+"
          component={RepositoryDefault}
        />
      </Switch>
    </BrowserRouter>
  );
};

export { AppRoutesDefault };
