import React, { useState } from "react";
import Clock from "./components/Clock";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton";
import './styles/App.css';
import { usePosts } from "./hooks/usePost";

function App() {

  const log = console.log;

  // post list manipulations
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'c-23 Lorem ipsum dolor sit amet'},
    {id: 2, title: 'b-JavaScript', body: 'b-13 Lorem ipsum dolor sit amet'},
    {id: 3, title: 'c-JavaScript', body: 'a-12 Lorem ipsum dolor sit amet'},
  ]);

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
        <PostList 
          posts = { sortedAndSearchedPosts } 
          deletePost = { deletePost } 
        />
      </div>

    </div>
  );
}

export default App;