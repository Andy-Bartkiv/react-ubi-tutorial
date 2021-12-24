import { useEffect, useState, useContext, useRef } from "react";
import { usePosts } from "../hooks/usePost";
import { useFetch } from "../hooks/useFetch";
import { useObserver } from "../hooks/useObserver";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/modal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostService from "../API/PostService";
import { getPagesQty } from "../utils/pages";
import { AuthContext, ModalContext } from "../context";
import ScrollToTop from "react-scroll-to-top";

function Posts() {
  
  const {page, setPage, limit, scroll} = useContext(AuthContext);
  const {modal, setModal} = useContext(ModalContext);
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState( {sort: '', search: ''} );
  const [totalPages, setTotalPages] = useState(0);
  // const [scroll, setScroll] = useState(false);
  
  const sortedAndSearchedPosts = usePosts(posts, filter);
  const bottomElement = useRef();

  const [fetchPosts, isPostsLoading, loadingError] = useFetch( async () => {
      const resp = await PostService.getAll(limit, page);
      if (scroll)
        setPosts([...posts, ...resp.data]);
      else
        setPosts(resp.data);
      setTotalPages(getPagesQty(resp.headers['x-total-count'], limit));
    });
  
  const scrollCondition = (page < totalPages) && scroll;
  useObserver(scroll, bottomElement, scrollCondition, isPostsLoading, () => {
    setPage(page + 1);
  });
  
  useEffect( () => {
    if (scroll) setPage(1);
  }, [scroll])

  useEffect( () => fetchPosts(), [page, limit]);
    
  const changePage = (p) => setPage(p);

  const addPostFromForm = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (delPost) => {
    setPosts(posts.filter((post) => 
    post.id !== delPost.id));
  };
  
  return (  
    <div className="App-body">
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

      { !scroll && 
      <Pagination 
        page = { page }
        totalPages = { totalPages }
        changePage = { changePage }
      />}

      {/* <button onClick={ () => setScroll(!scroll) }>{!scroll ? 'Scroll' : 'Pages'}</button> */}

      <hr style = { {margin: '.25em 0', background: 'orange', border: 'none', height: '.025em'} }/>
      { loadingError &&
        <h3 style={{color: 'orangered'}} >Error: {loadingError}</h3>
      }

      <PostList 
          posts = { sortedAndSearchedPosts } 
          highlight = { filter.search }
          deletePost = { deletePost } 
          />
      
      { isPostsLoading && <Loader /> }

      {/* Empy DIV for scrolling */}
      <div ref={ bottomElement } style={{ height: '.75em' }}></div>

      {/* Scroll-to-Top ARROW */}
      <ScrollToTop smooth top='200' color="orange" style={{ }}/>
    
    </div>
  );
}

export default Posts;