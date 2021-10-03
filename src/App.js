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
import Adduser from "./addser";



export default function App() {
  const [theme, setTheme] = useState('light');
  const [name, setName] = useState("");
  const [image, setimage] = useState("");
  const [desc, setdesc] = useState("")
  const [editableform, seteditableform] = useState(null);

  const handleeditclick = (event, id, username, image) => {
    event.preventDefault();
    seteditableform(id);
  };

  function handlebackformedit() {
    seteditableform(null);
  }

  const [names, setNames] = useState([]);

  useEffect(() => {
    getuset();
  }, []);

  const getuset = () => {

    fetch("https://6159b1d1601e6f0017e5a2b8.mockapi.io/users", { method: "GET" })
      .then((data) => data.json())
      .then((users) => setNames(users));
  };

  const adduser = (event) => {
    fetch("https://6159b1d1601e6f0017e5a2b8.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        image: image,
        description: desc
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(() => getuset());

    setName("");
    setimage("");
    setdesc("");


  };

  function Alldata({ name, setName, setimage, setdesc }) {

    return (
      <div className="App">


        {names.map((nm, id) => (
          <div>
            {editableform === nm.id ? (
              <div className="user-card-container">
                <div className="user-container">
                  <Edit
                    seteditableform={seteditableform}
                    desc={nm.description}
                    id={nm.id}
                    key={nm.id}
                    username={nm.name}
                    image={nm.image}
                    getUsers={getuset}
                    handlebackformedit={handlebackformedit}
                  />
                </div>
              </div>
            ) : (
              <User
                id={nm.id}
                key={nm.id}
                username={nm.name}
                image={nm.image}
                getUsers={getuset}
                handleeditclick={handleeditclick}
              />
            )}
          </div>
        ))}
      </div>)
  };

  function Details() {
    var { id } = useParams()
    return (<>

      {names.map((nm) => (
        <div>
          {id === nm.id ? (
            (
              <div>
                <h1>{nm.name}</h1>
                <img style={{ "height": "200px", "width": "200px" }} src={nm.image} />
                <p>{nm.description}</p>
              </div>
            )
          ) : " "}
        </div>
      ))}

    </>)
  }


  return (
    <div className="App">
      <ul>

        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/adduser">Adduser</Link>
        </li>

      </ul>
      <Switch>
        <Route exact path="/:username/:id">
          <Details />
        </Route>
        <Route exact path="/adduser">
          <Adduser name={name} setName={setName} image={image} setimage={setimage} desc={desc} setdesc={setdesc} adduser={adduser} />
        </Route>



        <Route excat path="/about">
          <About />
        </Route>
        <Route excat path="/home">
          <Alldata />
        </Route>
        <Route exact path="/">
          <Alldata />
        </Route>


      </Switch>
      <hr />

    </div>
  );

}

function About() {
  return (
    <div>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
        <p>We are using mock API to perform CRUD on all users </p>
      </div>
    </div>
  )
}



