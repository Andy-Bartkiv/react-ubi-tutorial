import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ( {number, post, deletePost} ) => {
  return (
		<div className = 'post'>
			<div className = 'post_content'>
				<strong> {number}. {post.title} </strong>
				<div>
					{post.body}
				</div>
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