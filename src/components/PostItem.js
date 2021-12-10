import React from "react";

const PostItem = () => {
  return (
		<div className = 'post'>
			<div className = 'post_content'>
				<strong>1. Javascript</strong>
				<div>JavaScript is a programmning language of the web</div>
			</div>
			<div className = 'post_btns'>
				<button>Delete</button>
			</div>
		</div>
	)
}

export default PostItem;