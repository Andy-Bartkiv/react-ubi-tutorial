import React, { useMemo, useState } from "react";
import Clock from "./components/Clock";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css';
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {

  const log = console.log;

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
  
  const [filter, setFilter] = useState( {sort: '', search: ''} );

  const [search, setSearch] = useState('');
  const sortedPosts = useMemo( () => {
    return (filter.sort)
      ? [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
      : posts
  }, [filter.sort, posts]);
  const sortedAndSearchedPosts = useMemo( () => {
    return (filter.search)
    ? sortedPosts.filter(post => post.title.toLowerCase().includes(filter.search) || post.body.toLowerCase().includes(filter.search))
    : sortedPosts
  }, [filter.search, sortedPosts])

  return (
    <div className="App">
      
      <div className='App-header'>
        <h2>React UbiTV-Tutorial</h2>
			  <Clock />
      </div>
      
      <div className='App-body'>
        <PostForm addPost = { addPostFromForm }/>
        <hr style = { {margin: '.5em 0', background: 'teal', border: 'none', height: '.05em'} }/>
        <PostFilter 
          filter = { filter }
          setFilter = { setFilter }
        />
        <PostList 
          posts = { sortedAndSearchedPosts } 
          deletePost = { deletePost } 
        />
      </div>

    </div>
  );
}

export default App;