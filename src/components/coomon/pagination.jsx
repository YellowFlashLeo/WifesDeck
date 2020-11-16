import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    // we want to render pages dynamically based on number of movies and pagesize
    // pageSize is how many moveis can we display on one page
    // we have array with page numbers and then we map each page number to list item below
    // we need to have unique key for each page and we highlight for user current page  (active)

    const pagesCount = Math.ceil(this.props.itemsCount / this.props.pageSize); // those are properties declared in movie jsx for pagination component
    if (pagesCount === 1) return null; // if we only have 1 page then we dont show its number on pagination component
    const pages = _.range(1, pagesCount + 1); // special library which returns array in given range
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === this.props.currentPage
                  ? "page-item active"
                  : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => this.props.onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  // to make check if inputs to properties is correct
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
