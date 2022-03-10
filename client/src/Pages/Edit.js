import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editcontact } from "../Redux/Actions/ContactActions";

const Edit = () => {
    const dispatch = useDispatch();
    const match = useMatch("/edit/:id");
    const navigate = useNavigate();
    const [newedit, setNewEdit] = useState({ name: "", email: "", age: "" });
    // const contactlist = useSelector(
    //     (state) => state.reducerContact.contactList
    // );
    // const foundContact = contactlist.find((el) => el._id === match.params.id);
    // console.log(foundContact);
    const handlechange = (e) => {
        setNewEdit({ ...newedit, [e.target.name]: e.target.value });
    };
    const handleEdit = () => {
        dispatch(editcontact(match.params.id, newedit));
        navigate(-1);
    };
    return (
        <div>
            <form>
                <div
                    className="form-group"
                    style={{
                        flexDirection: "row",
                        paddingTop: "2%",
                        paddingBottom: "2%",
                    }}
                >
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handlechange} />
                    <label>Email:</label>
                    <input type="text" name="email" onChange={handlechange} />
                    <label>Age:</label>
                    <input type="text" name="age" onChange={handlechange} />
                </div>
            </form>

            <Button onClick={handleEdit}>save</Button>
        </div>
    );
};

export default Edit;
