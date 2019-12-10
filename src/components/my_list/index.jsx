import React, { Component } from 'react';
import CreateTask from './create_task';
import ControlTasks from './control_tasks';
import ViewTasks from './view_tasks';

class MyList extends Component {

    state = {
        tasks: [
            {
                id: 1,
                task: 'Coding Practice',
                isCompleted: false
            }
        ],
        searchTerm: '',
        filter: 'all'
    }

    handleComplete = (id, checked) => {
        const newTasks = [...this.state.tasks]
        let index = newTasks.findIndex(task => task.id === id)
        newTasks[index].isCompleted = checked

        this.setState({
            tasks: newTasks  //ekhane newTasks use na kore array name tasks use korle valo
        })
    }

    getTask = (task) => {
        let taskObj = {
            isCompleted: false
        }

        taskObj.task = task;
        taskObj.id = new Date().getTime();

        let newTasks = [...this.state.tasks];
        newTasks.push(taskObj);

        this.setState({
            tasks: newTasks
        });
    }

    search = () =>  {
        if(!this.state.searchTerm) {
            return this.state.tasks
        }

        return this.state.tasks.filter(task => 
            task.task.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
        )
    }

    handleSearchTerm  = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleFilter = type =>  {
        this.setState({
            filter: type
        });
    }

    filter = (tasks) => {
        const {filter} = this.state;

        if(filter === 'completed') {
            return tasks.filter(task => task.isCompleted);
        }

        if(filter === 'not completed') {
            return tasks.filter(task => !task.isCompleted);
        }

        return tasks
    }

    clearCompleted = () => {
        let tasks = this.state.tasks.filter(task => !task.isCompleted);

        this.setState({tasks});
    }

    clearAll = () => {
        this.setState({
            tasks: [],
            filter: 'all',
            searchTerm: ''
        });
    }

    render() {
        let tasks = this.search();
        // console.log(this.state.searchTerm);

        // console.log(this.state.filter);
        tasks = this.filter(tasks);
        
        return (
            <div>
                <CreateTask getTask={this.getTask}/>
                <ControlTasks 
                    searchTerm={this.state.searchTerm} 
                    handleSearchTerm={this.handleSearchTerm}
                    handleFilter={this.handleFilter}
                />
                <div>
                    <button onClick={this.clearCompleted}>Clear Completed</button>
                    <button onClick={this.clearAll}>Clear All</button>
                </div>
                <ViewTasks 
                    tasks={tasks} 
                    handleComplete={this.handleComplete}
                />
            </div>
        )
    }
}

export default MyList