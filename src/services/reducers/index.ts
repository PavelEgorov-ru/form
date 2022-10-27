// редьюсеры
import { combineReducers } from "redux";
import { formReducers } from "./formSlice";

// экшены
export { formActions } from "./formSlice";

export const rootReducer = combineReducers({
  formState: formReducers,
});
