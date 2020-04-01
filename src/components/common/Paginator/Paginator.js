import s from "../../Users/users.module.css";
import React from "react";

const Paginator = ({portionSize = 10, ...props}) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = React.useState(1);
    let leftLimit = (portionNumber - 1) * portionSize + 1;
    let rightLimit = portionNumber * portionSize;
    return (
        <div className={s.pagination}>
            <div>
                {
                    portionNumber > 1 &&
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
                }
            </div>
            {
                pages
                    .filter((p) => p >= leftLimit && p <= rightLimit)
                    .map(item => {
                        return <span onClick={() => {
                            props.onPageChanged(item)
                        }} className={props.currentPage === item ? s.active : ''}>{item}</span>
                    })
            }
            <div>
                {
                    portionCount > portionNumber &&
                    <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
                }
            </div>
        </div>
    )
};
export default Paginator;
