import { combineReducers } from "redux";
import { userReducer,selectedreducer} from "./Reducer";

const reducers = combineReducers({
    currentuser:userReducer,
    selectuser:selectedreducer
});

export default reducers;