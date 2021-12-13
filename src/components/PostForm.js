import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import '../styles/PostForm.css'

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
      <form className="post_form">
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