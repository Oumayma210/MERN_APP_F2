import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addcontact } from "../Redux/Actions/ContactActions";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newContact, setnewContact] = useState({ name: "", email: "" });
    const handleChange = (e) => {
        setnewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    const add = () => {
        dispatch(addcontact(newContact));
    };
    return (
        <div>
            <label>Name:</label>

            <input name="name" onChange={handleChange} />
            <label>Email:</label>

            <input name="email" onChange={handleChange} />
            <label>Age:</label>

            <input name="age" onChange={handleChange} />
            <Link to={"/"}>
                <Button onClick={add}>add me</Button>
            </Link>
        </div>
    );
};

export default Add;
