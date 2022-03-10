import { GET_ALL, LOAD } from "../ActionsTypes/Contact";
import axios from "axios";
import { FAILED } from "./../ActionsTypes/Contact";
//get all
export const getcontact = () => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.get("/api/contacts/");
        dispatch({ type: GET_ALL, payload: result.data });
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
//post
export const addcontact = (newContact) => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        await axios.post("/api/contacts/", newContact);
        dispatch(getcontact());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
//delete
export const deletecontact = (id) => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        await axios.delete(`/api/contacts/${id}`);
        dispatch(getcontact());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};

//edit
export const editcontact = (id, editcontact) => async (dispatch) => {
    dispatch({ type: LOAD });

    try {
        await axios.put(`/api/contacts/edit/${id}`, editcontact);
        dispatch(getcontact());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
