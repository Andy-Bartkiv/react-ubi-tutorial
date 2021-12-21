import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../context";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {

  const { setPage, limit, setLimit } = useContext(AuthContext);

  const changeLimit = (val) => {
	setPage(1);
	setLimit(val);
  }

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
			<MySelect 
				value = { limit }
				onChange = { (val) => changeLimit(val) }
				defaultValue = "Posts on page:"
				options = {[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 25, name: '25' },
					{ value: -1, name: 'Show All' }
				]}
			/>
		</div>
  )
}

export default PostFilter;