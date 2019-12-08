import React, { Component } from 'react'

class MyList extends Component {

    item = [1, 2, 3, 4, 5, 6]

    render() {

        // let items = [
        //     <h1>I am List {this.item[0]}!</h1>,
        //     <h1>I am List {this.item[1]}!</h1>,
        //     <h1>I am List {this.item[2]}!</h1>,
        //     <h1>I am List {this.item[3]}!</h1>,
        //     <h1>I am List {this.item[4]}!</h1>,
        //     <h1>I am List {this.item[5]}!</h1>
        // ];

        return (
            <div>
                {this.item.map(it => {
                    if(it % 2 === 0) {
                        return <h1 key={it}>I am even!</h1>
                    }
                
                    return <h1 key={it}>I am List {it}!</h1>
                })}
            </div>
        )
    }
}

export default MyList