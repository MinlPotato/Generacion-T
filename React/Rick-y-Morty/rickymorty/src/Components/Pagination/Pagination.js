import React from "react";
import "./Pagination.css";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index)
        
        
    }
    console.log(postsPerPage);
    console.log(totalPosts);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* <li className="page-item">
          <a className="page-link disabled" href="#">
            Previous
          </a>
        </li> */}

        {pageNumbers.map(number => (
            <li key={number} className="page-item">
          <a onClick={() => paginate(number)} className="page-link" href="#">
            {number}
          </a>
          </li>
        ))}

       
        {/* <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Pagination;
