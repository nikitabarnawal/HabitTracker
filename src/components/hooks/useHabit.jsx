import { useContext } from "react";
import AddHabitContext from "../reducer/habitReducer/addContext";

const useHabit = () => {
  const { habits, dispatch } = useContext(AddHabitContext);
  return { habits, dispatch };
};

export default useHabit;
