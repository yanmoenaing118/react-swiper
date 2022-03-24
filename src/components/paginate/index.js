import "./index.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default function Pagination({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  function handlePageChage(evnet) {
    const newOffset = (evnet.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  }

  return (
    <div className="pagination-container">
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< prev"
        onPageChange={handlePageChage}
        pageCount={pageCount}   
        renderOnZeroPageCount={null}
        className="paginate"
        pageClassName="paginateButton"
        activeClassName="paginateActive"
      />
    </div>
  );
}

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}
