import React from "react";
import MyButton from "./UI/button/MyButton";
import Highlighter from "react-highlight-words";

const PostItem = ( {number, post, highlight, deletePost} ) => {
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
				<MyButton 
					onClick = { () => deletePost(post) }
				>
					Del
				</MyButton>
			</div>
		</div>
	)
}

export default PostItem;