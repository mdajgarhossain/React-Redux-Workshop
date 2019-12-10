import React from 'react';

const ControlTasks = ({searchTerm, handleSearchTerm, handleFilter}) => {
    return(
        <div style={{margin: '20px 0'}}>
            <input 
                type='text'
                value={searchTerm}
                onChange={handleSearchTerm}
                placeholder='Search Your Task'
            />
            <input 
                type='radio' 
                name='filter' 
                onChange={() => handleFilter('all')}
            /> 
            All
            <input 
                type='radio' 
                name='filter'
                onChange={() => handleFilter('completed')}
            /> 
            Completed
            <input 
                type='radio' 
                name='filter'
                onChange={() => handleFilter('not completed')}
            /> 
            Not Completed
        </div>

    )
}

export default ControlTasks;