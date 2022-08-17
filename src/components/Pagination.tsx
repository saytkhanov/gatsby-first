import React from 'react';
import { Link } from 'gatsby';
import {PaginationProps} from "../utils/types";

type Props = {
    pageContext: PaginationProps
}

const Pagination = ({ pageContext }: Props) => {

    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
    const nextPage = currentPage + 1;

    return (
        <div className="flex justify-between text-white mt-8">
            <Link className="bg-black w-40 h-11 text-center leading-10 text-xl rounded-sm" to={`${prevPage}`} rel="prev" aria-disabled={isFirst}>
                    ← Previous
            </Link>

            <div className="bg-black w-40 h-11 text-center leading-10 text-xl rounded-sm">
                Page {currentPage} of {numPages}
            </div>

            <Link className="bg-black w-40 h-11 text-center justify-center text-center leading-10 text-xl rounded-sm" to={`/page/${nextPage}`} rel="next" aria-disabled={isLast}>
                Next →
            </Link>
        </div>
    );
};

export default Pagination;