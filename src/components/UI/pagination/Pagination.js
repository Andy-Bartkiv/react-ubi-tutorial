import MyButton from "../button/MyButton";
import { getPagesArray } from "../../../utils/pages";
import cls from './Pagination.module.css'

const Pagination = ({ totalPages, page, changePage }) => {

    let pagesArray = getPagesArray(totalPages);

    return (
        <div className = { cls.pages } >
          { pagesArray.map((p) => 
            <MyButton 
              key = { p }
              className = { (page === p ) && cls.page_current }
              onClick = { () => changePage(p) }
            > { p } 
            </MyButton>
          )}
        </div>
    )
}
export default Pagination