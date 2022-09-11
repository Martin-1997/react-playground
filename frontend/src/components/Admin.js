import useFetch from "../useFetch";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const { data, isPending, error } = useFetch("http://localhost:5000/countries");

    const [name, setName] = useState('')
    const [isCreatePending, setCreatePending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        // This stops the page from reloading
        // e.preventDefault();
        setCreatePending(true)

        const country = { name };
        console.log(country);
        fetch('http://localhost:5000/countries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(country),
        }).then(() => {
            console.log("New Country added!")
            setCreatePending(false)
            // Navigate to a specific page
            navigate("/")
        })
    }

    const handleDelete = (e) => {
        // This stops the page from reloading
        //e.preventDefault();
        let id = e.target.id.value;
        fetch('http://localhost:5000/countries/' + id, {
            method:'DELETE'
        }).then(() => {
            navigate("/admin")
        })
    }

    return <div>
        <h2>Admin Page</h2>
        {isPending && <div><br />Loading ...<br /><br /></div>}
        {error && <div><br />{error}<br /><br /></div>}
        {/* Only load the elements when the data is loaded */}
        {data &&
            <div>
                {data.map((element, key) =>
                    <form onSubmit={handleDelete} key={key}>
                        <label htmlFor="id"></label>
                        <input type="text" id="id" name="id" required value={element._id} readOnly></input>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" required value={element.name} readOnly></input>
                        <input type="submit" value="Delete"></input>
                    </form>
                )}

                <h3>Add a new country:</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {!isCreatePending && <input type="submit" value="Add Country"></input>}
                    {isPending && <input disabled type="submit" value="Adding Country..."></input>}
                </form>
            </div>
        }
    </div>;
}

export default Admin;