import React, { useEffect, useState } from "react";
import Clock from "./components/UI/clock/Clock";
import Loader from "./components/UI/loader/Loader";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton";
import './styles/App.css';
import { usePosts } from "./hooks/usePost";
import PostService from "./API/PostService";

function App() {

  const log = console.log;

  // post list manipulations
  const [posts, setPosts] = useState([
    // {title: '123', body: 'qwer <mark> sakjksldfj </mark>'}
  ]);
  // Post Loader Animation
  const [postloading, setPostLoading] = useState(false);

  useEffect( () => {
    fetchPosts();
  }, []);
  
  async function fetchPosts() {
    setPostLoading(true);
    setTimeout( async() => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setPostLoading(false);
    }, 1500)
  }

  const addPostFromForm = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (delPost) => {
    setPosts(posts.filter((post) => 
    post.id !== delPost.id));
  };
  
  // filter and sort
  const [filter, setFilter] = useState( {sort: '', search: ''} );
  const sortedAndSearchedPosts = usePosts(posts, filter);

  // modal visibility
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      
      <div className='App-header'>
        <MyButton
          style = { {marginLeft: '1em'} } 
          onClick = { () => setModal(true) }>
          Create New Post
        </MyButton>
        <h2>React UlbiTV Tutorial</h2>
			  <Clock />
      </div>
      
      <div className='App-body'>
        <MyModal
          visible = { modal }
          setVisible = { setModal }
        >
          <PostForm addPost = { addPostFromForm }/>
        </MyModal>
        
        <PostFilter 
          filter = { filter }
          setFilter = { setFilter }
        />
        
        <hr style = { {margin: '.5em 0', background: 'orange', border: 'none', height: '.025em'} }/>
        { postloading
          ? <Loader />
          : <PostList 
              posts = { sortedAndSearchedPosts } 
              highlight = { filter.search }
              deletePost = { deletePost } 
            />
        }
      </div>

    </div>
  );
}

export default App;