import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontact } from "./../Redux/Actions/ContactActions";
import ContactCard from "./ContactCard";

const ContactList = () => {
    const dispatch = useDispatch();
    const contactlist = useSelector(
        (state) => state.reducerContact.contactList
    );
    const load = useSelector((state) => state.reducerContact.load);
    useEffect(() => {
        dispatch(getcontact());
    }, [dispatch]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "2%",
                flexWrap: "wrap",
                padding: "2%",
            }}
        >
            {load ? (
                <p>Loading</p>
            ) : (
                contactlist.map((el) => <ContactCard el={el} />)
            )}
        </div>
    );
};

export default ContactList;
