import { useReducer } from "react";
import TimeLineContext from "./timeLineContext";
import { getLSData, setLSData } from "../../../utils";

const TimeLineReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TIMELINE": {
      const { id, habitIds } = action.payload;
      const habitsdata = [];
      habitIds.forEach((id) => habitsdata.push({ id, done: false }));
      const timeline = {
        id: id,
        habits: habitsdata,
      };
      setLSData("timeline", [timeline, ...state]);
      return [timeline, ...state];
    }

    case "UPDATE_TIMELINE_CHECKBOX": {
      const updatedTimeLine = state.map((timeLine) => {
        if (timeLine.id === action.id) {
          return {
            ...timeLine,
            habits: timeLine.habits.map((habit) => {
              if (habit.id === action.habitId) {
                return {
                  ...habit,
                  done: !habit.done,
                };
              }
              return habit;
            }),
          };
        }
        return timeLine;
      });
      setLSData("timeline", updatedTimeLine);
      return updatedTimeLine;
    }

    case "UPDATE_TIMELINE": {
      const { id: timeLineId, habitId } = action.payload;
      const updatedTimeLine = state.map((timeLine) => {
        if (timeLine.id === timeLineId) {
          return {
            ...timeLine,
            habits: [
              ...timeLine.habits,
              {
                id: habitId,
                done: false,
              },
            ],
          };
        }
        return timeLine;
      });
      setLSData("timeline", updatedTimeLine);
      return updatedTimeLine;
    }
  }
};

const TimeLineContextProvider = ({ children }) => {
  const [timeLineData, dispatch] = useReducer(
    TimeLineReducer,
    getLSData("timeline")
  );

  return (
    <TimeLineContext.Provider value={{ timeLineData, dispatch }}>
      {children}
    </TimeLineContext.Provider>
  );
};

export default TimeLineContextProvider;
