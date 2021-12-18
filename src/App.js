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
import { useFetch } from "./hooks/useFetch";
import PostService from "./API/PostService";
import Pagination from "./components/UI/pagination/Pagination";
import { getPagesQty, getPagesArray } from "./utils/pages";

function App() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState( {sort: '', search: ''} );
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(10);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);


  const [fetchPosts, isPostsLoading, loadingError] = useFetch( async () => {
      const resonse = await PostService.getAll(limit, page);
      setPosts(resonse.data);
      setTotalPages(getPagesQty(resonse.headers['x-total-count'], limit));
  });

  useEffect( () => fetchPosts(), [page]);
  
  const addPostFromForm = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (delPost) => {
    setPosts(posts.filter((post) => 
    post.id !== delPost.id));
  };
  
  // filter and sort
  const sortedAndSearchedPosts = usePosts(posts, filter);

  const changePage = (p) => {
    setPage(p);
  }

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

        <Pagination 
          page = { page }
          totalPages = { totalPages }
          changePage = { changePage }
        />

        <hr style = { {margin: '.25em 0', background: 'orange', border: 'none', height: '.025em'} }/>
        { loadingError &&
          <h3 style={{color: 'orangered'}} >Error: {loadingError}</h3>
        }
        
        { isPostsLoading
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