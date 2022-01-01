import { combineReducers } from "redux";
import userDetails from "./user";


const rootReducer = combineReducers({
    counter: userDetails,
});
export default rootReducer;