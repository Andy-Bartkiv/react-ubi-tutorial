import { useParams } from 'react-router-dom';

const PostIDPage = () => {

    const postID = useParams().id;

    return (
        <div className='App-body'>
            You open POST ID = { postID }
        </div>
    )
}

export default PostIDPage
