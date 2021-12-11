import React, { useState } from "react";
import MyInput from "./UI/inputs/MyInput";
import MyButton from "./UI/buttons/MyButton";

function PostForm(props) {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (event) => {
			event.preventDefault();
			const newPost = {
				...post,
				id: Date.now()
			};
			props.addPost(newPost);
			setPost({ title: '', body: ''});
    }
    
    return (
      <form>
        <MyInput 
					type="text" 
					placeholder="Post Title" 
					value={ post.title } 
					onChange= { e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
					type="text" 
					placeholder="Post Description" 
					value={ post.body } 
					onChange= { e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick = {addNewPost}>Create Post</MyButton>
      </form>
    )
}

export default PostForm;