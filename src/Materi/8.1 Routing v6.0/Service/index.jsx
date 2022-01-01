import { Link, Route, Routes} from "react-router-dom";

const Service = () => {

    return(
        <div className="main">
            <h2>Service Page</h2>
            <ul>
                <li><Link to="/service/computer">Computer</Link></li>
                <li><Link to="/service/smartphone">Smartphone</Link></li>
                <li><Link to="/service/software">Software</Link></li>
            </ul>
            <hr />
            <Routes>
                <Route path="/computer" element={<p>Komputer, CPU, Monitor, Laptop, Hard Disk dan lain-lain</p>}/>
                <Route path="/smartphone" element={<p>Samsung, IPhone, Xiaomi dan lain-lain</p>}/>
                <Route path="/software" element={<p>Windows, Linux, Microsoft Office, Editor dan lain-lain</p>}/>
            </Routes>
        </div>
    )
}

export default Service;