import React from "react";
import { useNavigate } from 'react-router-dom'; 
import MyButton from "./UI/button/MyButton";
import Highlighter from "react-highlight-words";

const PostItem = ({ post, highlight, deletePost }) => {

  const navigate = useNavigate();

  return (
		<div className = 'post'>
			<div className = 'post_content'>
				{/* <strong> {number}. {post.title} </strong> */}
				<Highlighter
					className="post_title"
					highlightClassName="highlighter"
					searchWords = { [highlight] }
					autoEscape = { true }
					textToHighlight = { `${post.id}. ${post.title}` }
  				/>
				<br/>
				<Highlighter
					highlightClassName="highlighter"
					searchWords = { [highlight] }
					autoEscape = { true }
					textToHighlight = { post.body }
  				/>
			</div>
			<div className = 'post_btns'>
				<MyButton onClick={ () => deletePost(post) } style={{ padding: '.25em .5em' }}>
					X
				</MyButton>
				<MyButton onClick = { () => navigate(`/posts/${post.id}`) }>
					Open
				</MyButton>
			</div>
		</div>
	)
}

export default PostItem;