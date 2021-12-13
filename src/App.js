import React, { useMemo, useState } from "react";
import Clock from "./components/Clock";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton";
import './styles/App.css';

function App() {

  const log = console.log;

  // post list manipulations
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'c-description 1'},
    {id: 2, title: 'aJavaScript 2', body: 'b-description 2'},
    {id: 3, title: 'bJavaScript 3', body: 'a-description 3'},
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

  // modal visibility
  const [modal, setModal] = useState(false)


  return (
    <div className="App">
      
      <div className='App-header'>
        <MyButton
          style = { {marginLeft: '1em'} } 
          onClick = { () => setModal(true) }>
          Create New Post
        </MyButton>
        <h2>React UbiTV-Tutorial</h2>
			  <Clock />
      </div>
      
      <div className='App-body'>
        <MyModal
          visible = { modal }
          setVisible = { setModal }
        >
          <PostForm addPost = { addPostFromForm }/>
        </MyModal>
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