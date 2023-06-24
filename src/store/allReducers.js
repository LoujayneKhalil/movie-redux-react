import { combineReducers } from "redux";
import moviesReducer from "../Movies/movies.reducer";
import {popupReducer,selectedCardReducer} from "../MoviesPopUp/popup.reducers";

const reducers = combineReducers({
    moviesReducer,
    popupReducer,
    selectedCardReducer,
    
})

export default reducers;