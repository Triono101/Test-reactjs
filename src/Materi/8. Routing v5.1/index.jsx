import Navigation from "./Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Clients from "./Client";
import Contact from "./Contact";
import Post from "./Post";

const Routing = () => {

    return(
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" children={() => <Home />} />
                    <Route path="/service" children={() => <Service />} />
                    <Route path="/clients" children={() => <Clients />} />
                    <Route path="/contact" children={() => <Contact />} />
                    <Route path="/post/:Id" children={() => <Post />} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing;