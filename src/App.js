import React, { useState } from "react";
import Clock from "./components/Clock";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'description 1'},
    {id: 2, title: 'JavaScript 2', body: 'description 2'},
    {id: 3, title: 'JavaScript 3', body: 'description 3'}
  ]);

  const [inputTitle, setInputTitle] = useState('');
  const [inputBody, setInputBody] = useState('');

  function addNewPost(event) {
    event.preventDefault();
    const newPost = {
      id: Date.now(), 
      title: inputTitle,
      body: inputBody
    }
    setPosts([...posts, newPost]);
    setInputTitle('');
    setInputBody('');
    console.log(newPost);
  };

  return (
    <div className="App">
      
      <div className='App-header'>
        <h2>React UbiTV Tutorial</h2>
			  <Clock />
      </div>
      
      <div className='App-body'>
        <form>
          <MyInput 
            type="text" 
            placeholder="Post Title" 
            value={ inputTitle } 
            onChange= { e => setInputTitle(e.target.value)}
          />
          <MyInput 
            type="text" 
            placeholder="Post Description" 
            value={ inputBody } 
            onChange= { e => setInputBody(e.target.value)}
          />
          <MyButton onClick = {addNewPost}>Create Post</MyButton>
        </form>
        <PostList posts = {posts} listTitle = {'Post List #1'} />
      </div>

    </div>
  );
}

export default App;