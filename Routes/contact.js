//require express
const express = require("express");
const { updateOne } = require("../model/Contact");
//require router (instance)
const router = express.Router();
//require schema
const Contact = require("../model/Contact");
// crud
/**
 * TEST
 */
router.get("/test", (req, res) => {
    res.send("hello test");
});
/** MEthod:Post
 * http://localhost:5555/api/contacts/
 * req.body
 */
router.post("/", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newContact = new Contact({ name, email, age });
        await newContact.save();
        res.status(200).send({ msg: "good work!", newContact });
    } catch (error) {
        res.status(400).send({ msg: "Failed to add!", error });
    }
});
/** MEthod:get all
 * http://localhost:5555/api/contacts/all
 *
 */
router.get("/", async (req, res) => {
    try {
        const contactList = await Contact.find();
        res.status(200).send({ msg: "good work get all ", contactList });
    } catch (error) {
        res.status(400).send({ msg: "Failed to add!", error });
    }
});
/** MEthod:getone
 * http://localhost:5555/api/contacts/getone
 *req.params
 */
router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foundContact = await Contact.findOne({ _id });
        res.status(200).send({ msg: "good work get all ", foundContact });
    } catch (error) {
        res.status(400).send({ msg: "Failed to add!", error });
    }
});
/** MEthod:put
 * http://localhost:5555/api/contacts/edit/
 *req.params && req.body
 */
router.put("/edit/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, email, age } = req.body;
        const editContact = await Contact.findByIdAndUpdate(
            { _id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "good work edit ", editContact });
    } catch (error) {
        res.status(400).send({ msg: "Failed to edit!!!", error });
    }
});
/** MEthod:delete
 * http://localhost:5555/api/contacts/delete/
 *req.params
 */
router.delete("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteContact = await Contact.deleteOne({ _id });
        res.status(200).send({ msg: "deleted " });
    } catch (error) {
        res.status(400).send({ msg: "Failed to delete!!!", error });
    }
});
//export router
module.exports = router;
