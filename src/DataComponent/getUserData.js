import axios from "axios";
import React, { useEffect, useState } from "react";

const GetUserData = () => {

    const [posts, setPosts] = useState([])
    const [param, setParam] = useState(0)

    const changeHandler = (idTaken) => {
        console.log("idTaken", idTaken)
        setParam(idTaken)
    }

    useEffect(() => {
        console.log(param)
        axios.get(`https://dummyjson.com/products/${param}`).then(response => {
            console.log(response.data)
            setPosts([...posts, response.data])
        })
    }, [param])


    return (<div>
        <input type="text" value={param} onChange={(e)=>{changeHandler(e.target.value)}}></input> <br />
        {/* <button onClick={getDataById}>Get Data</button> <hr /> */}
        Data Recieved: <br />
        {posts && posts.map(response => <li>{response.title}</li>)}
    </div>)
}

export default GetUserData;