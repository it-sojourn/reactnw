import s from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i);}

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>

        <div className={s.pagesBtns}>
            { portionNumber > 1 &&
            <span className={s.pagesToggle} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</span>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>
                            <span className={s.pagesBtnsOne}>{p}</span>
                            </span>
            })}
            {portionCount > portionNumber &&
            <span className={s.pagesToggle} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</span>}
        </div>
    </div>
}

export default Paginator;
