import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, deletePost }) => {
	const listTitle = (posts.length > 0)
		? 'Post List #1'
		: 'No Posts to Show';
	return (
		<div>
			<h2>{ listTitle }</h2>
			{posts.map((post, index) => 
				<PostItem 
					number = {index + 1} 
					key = {post.id} 
					post = {post} 
					deletePost = {deletePost} 
				/>
			)}
		</div>
	)
}

export default PostList;