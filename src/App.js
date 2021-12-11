import React, { useState } from "react";
import Clock from "./components/Clock";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'description 1'},
    {id: 2, title: 'JavaScript 2', body: 'description 2'},
  ]);

  const addPostFromForm = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (delPost) => {
    setPosts(posts.filter((post) => 
      post.id !== delPost.id));
  }

  return (
    <div className="App">
      
      <div className='App-header'>
        <h2>React UbiTV Tutorial</h2>
			  <Clock />
      </div>
      
      <div className='App-body'>
        <PostForm addPost = { addPostFromForm }/>
        <PostList deletePost = {deletePost} posts = { posts } listTitle = {'Post List #1'} />
      </div>

    </div>
  );
}

export default App;