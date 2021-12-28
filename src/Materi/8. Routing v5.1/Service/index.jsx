import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const Service = () => {
    const match = useRouteMatch();

    return(
        <div className="main">
            <h2>Service Page</h2>
            <ul>
                <li><Link to={`${match.url}/computer`}>Computer</Link></li>
                <li><Link to={`${match.url}/smartphone`}>Smartphone</Link></li>
                <li><Link to={`${match.url}/software`}>Software</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path={`${match.url}/computer`}>
                    Komputer, CPU, Monitor, Laptop, Hard Disk dan lain-lain
                </Route>
                <Route path={`${match.url}/smartphone`}>
                    Samsung, IPhone, Xiaomi dan lain-lain
                </Route>
                <Route path={`${match.url}/software`}>
                    Windows, Linux, Microsoft Office, Editor dan lain-lain
                </Route>
            </Switch>
        </div>
    )
}

export default Service;