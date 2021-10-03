import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter,
    useHistory,
    useParams
} from "react-router-dom";
import React from "react";
import "./App.css";
import Edit from "./edituser";
import User from "./readuser";



function Adduser({ name, setName, image, setimage, desc, setdesc, adduser }) {
    return (
        <div className="user-card-container">
            <div className="user-container " >
                <div className="user-form">
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                    />
                    <input
                        value={image}
                        onChange={(event) => setimage(event.target.value)}
                        placeholder="Enter image url"
                    />
                    <input
                        value={desc}
                        onChange={(event) => setdesc(event.target.value)}
                        placeholder="Enter a description" />


                    <button class="butt" onClick={(event) => adduser(event)}>Add User</button>
                </div>
            </div>
        </div>
    )
}

export default Adduser;