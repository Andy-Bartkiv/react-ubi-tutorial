import React, { useState } from "react";
import Clock from "./components/Clock";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css';
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'c-description 1'},
    {id: 2, title: 'aJavaScript 2', body: 'b-description 2'},
    {id: 3, title: 'bJavaScript 3', body: 'a-description 3'},
  ]);

  const addPostFromForm = (newPost) => {
    setPosts([...posts, newPost]);
  };
  
  const deletePost = (delPost) => {
    setPosts(posts.filter((post) => 
    post.id !== delPost.id));
  };
  
  const [sortMode, setSortMode] = useState('');

  const sortPosts = (srt) => {
    console.log(srt);
    setSortMode(srt);
    setPosts([...posts].sort((a,b) => 
      a[srt].localeCompare(b[srt])))
  };
  
  const listTitle = (posts.length > 0)
    ? 'Post List #1'
    : 'No Posts to Show';

  return (
    <div className="App">
      
      <div className='App-header'>
        <h2>React UbiTV Tutorial</h2>
			  <Clock />
      </div>
      
      <div className='App-body'>
        <PostForm addPost = { addPostFromForm }/>
        <MySelect 
          value = { sortMode }
          onChange = { sortPosts }
          defaultValue = "Sort Mode:"
          options = {[
            {value: 'title', name: 'By Title'},
            {value: 'body', name: 'By Description'}
          ]}
        />
        <PostList deletePost = {deletePost} posts = { posts } listTitle = { listTitle } />
      </div>

    </div>
  );
}

export default App;