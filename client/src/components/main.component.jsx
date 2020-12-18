import React, { useState, useEffect } from 'react'
import UserService from "../service/UserService"
import Navbar from "./navbar.component"
function Main() {
    const initialUserState = {
        email: "",
        password: "",

    }
    const [user, setUser] = useState(initialUserState);
    const [role, setRole] = useState("");
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    const saveUser = () => {
        var data = {
            email: user.email,
            password: user.password,
        }

        UserService.signin(data).then(response => {
            setUser({
                name: response.data.name,
                email: response.data.email,
                role: response.role,


            })


            console.log(role);
        }).catch(e => {
            console.log(e);
        })
    }


    return (
        <div>

            <div className="form-group">

                <input
                    type="text"
                    placeholder="Enter Email "
                    className=" in"
                    id="email"
                    required

                    value={user.email}
                    onChange={handleInputChange}
                    name="email"
                />
            </div>
            <div className="form-group">

                <input
                    type="text"
                    placeholder="Enter Estimated Price "
                    className=" in"
                    id="password"
                    required

                    value={user.password}
                    onChange={handleInputChange}
                    name="password"
                />
            </div>
            <button onClick={saveUser} className="btn btn-success">
                Submit
            </button>

        </div>
    )
}

export default Main;
