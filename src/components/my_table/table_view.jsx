import React from 'react';
import styles from './table.module.css';

const TableView = ({data=[], prevPage, prevDisabled, nextPage, nextDisabled}) => {
    return(
        <div>
            <table className='table'>
                <thead>
                    <tr className={styles.thead}>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        return(
                            <tr className={styles.tr} key={item.id}>
                                <th scope="col">{item.id}</th>
                                <td >{item.firstName}</td>
                                <td>{item.lastName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div>
                <p>Pagination</p>
                <button 
                    className='btn btn-sm btn-primary' 
                    onClick={prevPage}
                    disabled={prevDisabled}
                >
                    Previous Page
                </button>
                <button 
                    className='btn btn-sm btn-primary' 
                    onClick={nextPage}
                    disabled={nextDisabled}
                >
                    Next Page
                </button>
            </div>

        </div>
    )
}

export default TableView;