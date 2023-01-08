import React, { Component } from 'react'

class ToDoComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tasks: []
        }
    }

    LOCAL_STORAGE_KEY = "task"

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            console.log("state", this.state)
        })
    }

    resetName = () => {
        this.setState({ name: '' })
    }

    onSubmit = (e) => {

        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, this.state.name]
            }
        }, () => {
            console.log("state", this.state)
            this.resetName()
            this.saveToLocalStorage()
        if (localStorage.length > 0) {
            console.log("local storage exists")
            this.getFromLocalStorage()
        }
        })
        // this.props.addContactHandler(this.state)
        e.preventDefault()
    }

    saveToLocalStorage() {
        localStorage.setItem("task", JSON.stringify(this.state.tasks))
    }
    getFromLocalStorage() {
        const retrievedTasks = JSON.parse(localStorage.getItem("task"))
        // this.setState({tasks:[...this.state.tasks, retrievedTasks]})
        this.setState(prevState => {
            return {
                tasks: retrievedTasks
            }
        }, () => {
            console.log("retrievedTasks state", this.state)
        })
    }

    componentDidMount(){
        this.getFromLocalStorage()
    }

    removeTask(task){
        const modState = this.state.tasks.filter(res=>res !== task)
        this.setState(prevState => {
            return {
                tasks: modState
            }
        })
        const retrievedTasks = JSON.parse(localStorage.getItem("task"))
        retrievedTasks.filter(res=>res !== task)
        localStorage.setItem("task", JSON.stringify(retrievedTasks))
        console.log("updated LS", localStorage)
    }

    render() {
        return (<div className='ui main'>
            <h2>Add Task</h2>
            <form className='ui form' onSubmit={(e) => { this.onSubmit(e) }}>
                <div className='ui field'>
                    <label>Name </label>
                    <input type="text" name='name' value={this.state.name}
                        onChange={(e) => { this.onChangeHandler(e) }} placeholder='Name' />
                </div>
                <button type='submit' className='ui button blue'>Add</button>
            </form>
            <hr />
            Tasks Added:

            <table class="ui celled striped table">
                <thead>
                    <tr><th colspan="3">
                        Tasks Added
                    </th>
                    </tr></thead>
                <tbody>
                    {
                        this.state.tasks ? (this.state.tasks.map((task, index) => {
                            return (
                                <tr>
                                    <td class="collapsing">
                                        <i class="folder icon"></i> {index}
                                    </td>
                                    <td>{task}</td>
                                    <td onClick={()=>{this.removeTask(task)}} class="right aligned collapsing"><i class="red delete icon"></i>delete</td>
                                </tr>
                            )
                        })): null
                    }
                </tbody>
            </table>

            <hr />


        </div>)
    }
}

export default ToDoComp;