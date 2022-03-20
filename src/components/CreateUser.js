import React from 'react'
import { useState } from 'react'
import axios from "axios";

const CreateUser = () => {

    const [inputs, setInputs] = useState({

    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://23.22.247.87/api/', inputs);
        console.log(inputs);
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>

                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange}/>

                <label>Email: </label>
                <input type="text" name="email" onChange={handleChange}/>

                <label>Mobile</label>
                <input type="text" name="mobile" onChange={handleChange}/>

                <button>Save</button>
            </form>
        </div>
    );
}

export default CreateUser