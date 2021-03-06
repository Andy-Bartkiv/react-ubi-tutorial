import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import '../styles/PostList.css'

const PostList = ({ posts, highlight, deletePost }) => {
	const listTitle = (posts.length > 0)
		? 'Post List #1'
		: 'No Posts to Show';
	return (
		<div>
			<h3>{ listTitle }</h3>
			<TransitionGroup className = 'post_list'>
				{ posts.map((post) => (
					<CSSTransition
						key = { post.id } 
						timeout = { 500 }
						classNames = "post"
					>
						<PostItem 
							post = { post }
							highlight = { highlight }
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