import { FunctionalComponent, h } from "preact";
import { Router, Route } from "preact-router";
import App from "../components/app";

const MainNavigator: FunctionalComponent = () => (
    <Router>
        <Route path="/" component={App} />
        <Route path="/validator/" component={App} />
        <Route path="/charts/" component={App} />
        <Route path="/voting/" component={App} />
    </Router>
);

export default MainNavigator;
