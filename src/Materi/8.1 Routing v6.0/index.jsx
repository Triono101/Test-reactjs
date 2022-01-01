import Navigation from "./Navigation";
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import Home from "./Home";
import Service from "./Service";
import Clients from "./Client";
import Contact from "./Contact";
import Post from "./Post";

const Routing2 = () => {

    return(
        <div>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service/*" element={<Service />} />
                    <Route path="/clients/*" element={<Clients />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/post/:Id" element={<Post />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routing2;