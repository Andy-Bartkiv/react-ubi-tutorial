import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="post_filter">
			<MySelect 
				value = { filter.sort }
				onChange = { (sortMode) => setFilter({...filter, sort: sortMode})}
				defaultValue = "Sort Mode:"
				options = {[
					{ value: 'title', name: 'By Title' },
					{ value: 'body', name: 'By Description' }
				]}
			/>
			<MyInput
				placeholder = {'Search by Title or Description...'}
				value = { filter.search }
				onChange = { (e) => setFilter({...filter, search: e.target.value.toLowerCase()})}
			/>
		</div>
  )
}

export default PostFilter;