import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div className="main">
            <h2>Home Page</h2>
            <ul>
                <li><Link to="/post/1">Satu</Link></li>
                <li><Link to="/post/2">Dua</Link></li>
                <li><Link to="/post/3">Tiga</Link></li>
                <li><Link to="/post/4">Empat</Link></li>
                <li><Link to="/post/5">Lima</Link></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio veritatis inventore atque. Dolore ipsa ratione ipsam vel dolores commodi temporibus nobis facilis dicta, recusandae ut nihil earum quam voluptatem.</p>
        </div>
    )
}

export default Home;