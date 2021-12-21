import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetch } from '../hooks/useFetch';

const PostIDPage = () => {
    
    const postID = useParams().id;
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostByID, isLoading, error] = useFetch( async (id) => {
        const resp = await PostService.getPostByID(id);
        setPost(resp.data)
    });
    const [fetchCommentsByID, isComentsLoading, errorComments] = useFetch( async (id) => {
        const resp = await PostService.getCommentsByID(id);
        setComments(resp.data);
    });

    useEffect( () => {
        fetchPostByID(postID);
        fetchCommentsByID(postID);
    }, []);

    return (
        <div className='App-body'>
            
            <br/>
            { (isLoading)
                ? <Loader />
                : <div>
                    <h3>{ post.title }</h3>
                    <hr style={{ border: 'none', margin: '.25em 0', height: '.05em', background: 'whitesmoke' }}/>
                    <p>{ post.body }</p>
                  </div>
            }
            <br/>
            <h4>Comments:</h4>
        
            { (isComentsLoading)
                ? <Loader />
                : <ol style={{ padding: '.25em 1em'}}>
                    { comments.map(cmnt =>
                        <li key={cmnt.id}>
                            <h5>{cmnt.email}:</h5>
                            <p>{cmnt.name}</p>
                        </li>
                    )}
                  </ol>
            }
                
        </div>
    )
}

export default PostIDPage
