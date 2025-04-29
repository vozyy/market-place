import React from 'react'
import classNames from 'classnames';
import './Pagination.scss'

function Pagination({
        currentPage,
        totalPages,
        onChange,
        isPending = false
    }) {

    if (totalPages <= 1) return null;

    return (
        <nav className="pagination" aria-label="Product list pages">
            <button
                onClick={() => onChange(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-disabled={isPending || currentPage <= 1}
                className={classNames('page-previous', { pending: isPending })}
            >
                Previous
            </button>
            <div className='pagination-pages'>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                    key={i + 1}
                    onClick={() => onChange(i + 1)}
                    aria-current={currentPage === i + 1 ? 'page' : undefined}
                    className="page"
                    >
                    {i + 1}
                    </button>
                ))}
            </div>
            <button
                onClick={() => onChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-disabled={isPending || currentPage >= totalPages}
                className={classNames('page-next', { pending: isPending })}
            >
                Next
            </button>
        </nav>
    )
}

export default Pagination