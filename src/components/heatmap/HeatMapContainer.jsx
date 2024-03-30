import { getFormattedDate } from "../../utils";
import useTimeLine from "../hooks/useTimeLine";
import useHabit from "../hooks/useHabit";
import HeatMapChart from ".";

const HeatMapContainer = () => {
  const { timeLineData } = useTimeLine();
  const { habits } = useHabit();

  return habits?.map(({ id, todo }) => {
    const value = timeLineData
      .flatMap((timeLine) =>
        timeLine?.habits?.map((habit) => {
          if (habit.id === id && habit.done) {
            const item = {
              date: getFormattedDate(timeLine.id),
              count: 1,
            };
            return item;
          }
        })
      )
      .filter((item) => item !== undefined);

    return <HeatMapChart key={id} todo={todo} value={value} />;
  });
};

export default HeatMapContainer;
