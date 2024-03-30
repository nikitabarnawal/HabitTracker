import { useReducer } from "react";
import AddHabitContext from "./addContext";
import { getLSData, setLSData } from "../../../utils";

const habitReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT": {
      const newData = [
        ...state,
        {
          ...action.payload,
        },
      ];
      setLSData("habits", newData);
      return newData;
    }
    case "EDIT_HABIT": {
      const newData = state.map((val) => {
        if (action.id === val.id) {
          return {
            ...val,
            todo: action.todo,
          };
        }
        return val;
      });
      setLSData("habits", newData);
      return newData;
    }
  }
};

const MyHabitProvider = ({ children }) => {
  const [habits, dispatch] = useReducer(habitReducer, getLSData("habits"));

  return (
    <AddHabitContext.Provider value={{ habits, dispatch }}>
      {children}
    </AddHabitContext.Provider>
  );
};

export default MyHabitProvider;
