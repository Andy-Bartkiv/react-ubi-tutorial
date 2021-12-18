import MyButton from "../button/MyButton";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="pages">
          { pagesArray.map((p) => 
            <MyButton 
              key = { p }
              className = {(page === p ) && 'page_current'} 
              onClick = { () => changePage(p) }
            > { p } 
            </MyButton>
          )}
        </div>
    )
}
export default Pagination