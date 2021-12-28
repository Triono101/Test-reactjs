import { useHistory, useParams } from "react-router-dom";

const Post = () => {
    const history = useHistory()

    const {Id} = useParams()
    return (
        <div className="main">
            <h4>Post ke {Id}</h4>
            <p>Deskripsi</p>
            <button onClick={() => history.push("/")}>Kembali</button>
        </div>
    )
}

export default Post;