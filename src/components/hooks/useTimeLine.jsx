import { useContext } from "react";
import TimeLineContext from "../reducer/timelineReducer/timeLineContext";

const useTimeLine = () => {
  const { timeLineData, dispatch } = useContext(TimeLineContext);

  return { timeLineData, dispatch };
};

export default useTimeLine;
