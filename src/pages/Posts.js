import { useEffect, useState, useContext } from "react";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal"
import { usePosts } from "../hooks/usePost";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/PostService";
import Pagination from "../components/UI/pagination/Pagination";
import { getPagesQty } from "../utils/pages";
import { AuthContext, ModalContext } from "../context";

function Posts() {

  const {page, setPage} = useContext(AuthContext);
  const {limit, setLimit} = useContext(AuthContext);
  const {modal, setModal} = useContext(ModalContext);

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState( {sort: '', search: ''} );
  const [totalPages, setTotalPages] = useState(0);

  const [fetchPosts, isPostsLoading, loadingError] = useFetch( async () => {
      const resp = await PostService.getAll(limit, page);
      setPosts(resp.data);
      setTotalPages(getPagesQty(resp.headers['x-total-count'], limit));
  });

  useEffect( () => fetchPosts(), [page, limit] );
  
  const changePage = (p) => setPage(p);

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
  );
}

export default Posts;