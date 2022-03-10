import React from "react";
import { useDispatch } from "react-redux";
import { deletecontact } from "./../Redux/Actions/ContactActions";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
const ContactCard = ({ el }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Card
                style={{
                    margin: "5%",
              
                    width: "18rem",
                }}
            >
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>{el.email}</Card.Text>
                    <Card.Text>{el.age}</Card.Text>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Button
                            variant="primary"
                            onClick={() => navigate(`/edit/${el._id}`)}
                        >
                            Edit{" "}
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => dispatch(deletecontact(el._id))}
                        >
                            Delete
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContactCard;
