import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
    const navigate = useNavigate()

    const {Id} = useParams()
    return (
        <div className="main">
            <h4>Post ke {Id}</h4>
            <p>Deskripsi</p>
            <button onClick={() => navigate("/")}>Kembali</button>
        </div>
    )
}

export default Post;