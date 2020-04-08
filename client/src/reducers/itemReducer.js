import uuid from "react-uuid";
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initalState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Candy" }
  ],
};

export default function(state = initalState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}