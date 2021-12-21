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
                : <div className='post' style={{ flexDirection: 'column', gap: '0.125em'}}>
                    <h3>{ post.title }</h3>
                    <hr style={{ border: 'none', margin: '.25em 0', height: '.05em', background: 'teal' }}/>
                    <p>{ post.body }</p>
                  </div>
            }
        
            { (isComentsLoading)
                ? <h5 style={{ textAlign: 'center', color: 'teal' }}>Loading comments...</h5>
                : <ol className='post_list' style={{ flexDirection: 'column', padding: '0 1em', gap: '0.25em'}}>
                    <h5 style={{ textAlign: 'center' }}>Comments:</h5>
                    { comments.map(cmnt =>
                        <li className='post' key={cmnt.id} style={{ flexDirection: 'column' }}>
                            <h5 style={{ color: 'teal'}}>{cmnt.email}:</h5>
                            <p>{cmnt.name}</p>
                        </li>
                    )}
                  </ol>
            }
                
        </div>
    )
}

export default PostIDPage
