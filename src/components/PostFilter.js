import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
			<MyInput
				placeholder = {'Search by Title or Description...'}
				value = { filter.search }
				onChange = { (e) => setFilter({...filter, search: e.target.value})}
			/>
			<MySelect 
				value = { filter.sort }
				onChange = { (sortMode) => setFilter({...filter, sort: sortMode})}
				defaultValue = "Sort Mode:"
				options = {[
					{ value: 'title', name: 'By Title' },
					{ value: 'body', name: 'By Description' }
				]}
			/>
		</div>
  )
}

export default PostFilter;