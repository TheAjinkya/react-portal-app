import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const UserDataWithReducer = () => {

    const initialState = {
        user:{}
    };

    const reducer = (state, action) => {

        switch (action.type) {
            case "get_data":
                return state + 1;
                break;
            default:
                break;
        }
    }

    useEffect(()=>{
        useEffect(() => {
            console.log(param)
            axios.get(`https://dummyjson.com/products/${param}`).then(response => {
                console.log(response.data)
                setPosts([...posts, response.data])
            })
        }, [param])
    })

    const [userData, dispatch] = useReducer(reducer, initialState)


    return (<div>
        user: {userData.user} <br />
    </div>)

}
export default UserDataWithReducer