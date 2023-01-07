import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    onChangeHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value}, ()=>{
            console.log("state", this.state)
        })
    }

    onSubmit =(e)=>{
        console.log("state", this.state)
        this.props.addContactHandler(this.state)
        e.preventDefault()
    }

    render() {
        return (<div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={(e)=>{this.onSubmit(e)}}>
                <div className='ui field'>
                    <label>Name </label>
                    <input type="text" name='name' value={this.state.name}
                    onChange={(e)=>{this.onChangeHandler(e)}} placeholder='Name'/>
                </div>
                <div className='ui field'>
                    <label>Email </label>
                    <input type="text" name='email'
                    onChange={this.onChangeHandler} value={this.state.email} placeholder='Email'/>
                </div>
                <button type='submit' className='ui button blue'>Add</button>
            </form>
        </div>)
    }
}

export default AddContact;