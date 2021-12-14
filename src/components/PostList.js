import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import '../styles/PostList.css'

const PostList = ({ posts, deletePost }) => {
	const listTitle = (posts.length > 0)
		? 'Post List #1'
		: 'No Posts to Show';
	return (
		<div>
			<h2>{ listTitle }</h2>
			<TransitionGroup className = 'post_list'>
			{posts.map((post, index) => (
				<CSSTransition
					key = { post.id } 
					timeout = { 500 }
					classNames = "post"
				>
					<PostItem 
						number = { index + 1 } 
						post = { post } 
						deletePost = { deletePost } 
				/>
				</CSSTransition>
			)
	
			)}
			</TransitionGroup>
		</div>
	)
}

export default PostList;