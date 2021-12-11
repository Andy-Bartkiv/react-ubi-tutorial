import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, listTitle }) => {
  return (
    <div>
			<h2>{ listTitle }</h2>
			{posts.map((post, index) => 
				<PostItem post = {post} number = {index + 1} key = {post.id} />
			)}
    </div>
	)
}

export default PostList;