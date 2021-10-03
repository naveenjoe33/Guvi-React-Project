import { useEffect, useState } from "react";
import "./App.css";

function Edit({
    username,
    image,
    desc,
    id,
    getUsers,
    seteditableform,
    handlebackformedit
}) {
    const [name1, setName] = useState(username);
    const [image1, setimage] = useState(image);
    const [desc1, setdesc] = useState(desc);
    console.log(image1);
    const edituser = async (event, id) => {
        event.preventDefault();

        await fetch("https://6159b1d1601e6f0017e5a2b8.mockapi.io/users/" + id, {
            method: "PUT",
            body: JSON.stringify({
                name: name1,
                image: image1,
                description: desc1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(() => getUsers());
        seteditableform(null);
    };

    return (
        <>
            <div>
                <div>
                    <label for="name">name:</label>
                    <input
                        id="name"
                        value={name1}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label for="image">image:</label>
                    <input
                        id="image"
                        value={image1}
                        onChange={(event) => setimage(event.target.value)}
                        placeholder="Enter image url"
                    />

                </div>
                <div>
                    <label for="desc">descrip:</label>
                    <input
                        id="desc"
                        value={desc1}
                        onChange={(event) => setimage(event.target.value)}
                        placeholder="enter Description"
                    />

                </div>
                <button onClick={(event) => edituser(event, id)}>Save</button>
                <button onClick={handlebackformedit}>Back</button>
            </div>
        </>
    );
}

export default Edit;
