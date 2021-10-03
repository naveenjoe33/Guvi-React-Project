import { useEffect, useState } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter,
    useHistory,
    useParams
} from "react-router-dom";

function User({ username, image, id, getUsers, handleeditclick }) {
    var hist = useHistory();
    const deleteuser = () => {
        fetch("https://6159b1d1601e6f0017e5a2b8.mockapi.io/users/" + id, {
            method: "DELETE"
        }).then(() => getUsers());
    };

    return (
        <div className="user-card-container">
            <div className="user-container">
                <img className="user-image" src={image}></img>
                <div>
                    <h1 className="user-name"> {username}</h1>
                    <button onClick={deleteuser}> Delete</button>
                    <button
                        onClick={(event) => handleeditclick(event, id, username, image)}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => hist.push(`/${username}/${id}`)}
                    >
                        details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default User;