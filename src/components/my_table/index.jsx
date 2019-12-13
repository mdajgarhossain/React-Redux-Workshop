import React, { Component } from 'react'
import TableView from './table_view';

const itemPerPage = 1; //jehetu class er vitor const define kora jay na

class MyTable extends Component {

    state = {
        users: [
            {
                id: 1,
                firstName: 'Karim',
                lastName: 'Khan'
            },
            {
                id: 2,
                firstName: 'Rahim',
                lastName: 'Khan'
            },
            {
                id: 3,
                firstName: 'Kurulus',
                lastName: 'Osman'
            },
            {
                id: 4,
                firstName: 'Dirilis',
                lastName: 'Artugrul'
            }
        ],
        currentPage: 1
    }

    nextPage = () => {
        let totalPage = Math.ceil(this.state.users.length / itemPerPage);
        if(this.state.currentPage < totalPage) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    prevPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }

    getItemsPerPage = () => {
        const startIndex = itemPerPage * this.state.currentPage - itemPerPage;
        const endIndex = startIndex + itemPerPage
        
        return this.state.users.slice(startIndex, endIndex);
    }

    render() {
        const data = this.getItemsPerPage();
        const totalPage = Math.ceil(this.state.users.length / itemPerPage);
        const nextDisabled = this.state.currentPage === totalPage;
        const prevDisabled = this.state.currentPage === 1;

        return (
            <div>
                <h1>Table Demo</h1>
                <TableView 
                    // data={this.state.users}
                    data={data}
                    nextPage={this.nextPage}
                    nextDisabled={nextDisabled}
                    prevPage={this.prevPage}
                    prevDisabled={prevDisabled}
                />
            </div>
        )
    }
}

export default MyTable