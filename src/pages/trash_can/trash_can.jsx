import ax from "../../../axios.js";
import { useEffect, useState } from 'react';
import Posts from "../../components/posts/posts.jsx";
import "./trash_can.scss";

const TrashCan = () => {

    const [posts, setPosts] = useState([]);

    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await ax.get(`${API_ENDPOINT}/getDeletedPosts`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);

            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="trashCanContainer">
            <h1 className="trashCanTitle">Trash Can</h1>
            <Posts posts={posts} />
        </div>
    );
}

export default TrashCan;