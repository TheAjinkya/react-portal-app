import React from "react";

const AddUser = ()=>{

    const submitHandler = (event)=>{
        console.log(event)
        event.preventDefault()
    }

    return(<div>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" />
            <label htmlFor="age">Age</label>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    </div>)

}

export default AddUser;
