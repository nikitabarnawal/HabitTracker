import { useEffect } from "react";
import styled from "styled-components";
import TimeLineList from "./TimeLineList";
import useTimeLine from "../hooks/useTimeLine";
import useHabit from "../hooks/useHabit";
import { getTimeLineDay } from "../../utils";

const StyledListContainer = styled.div`
  flex: 1;
  padding: 20px 40px 20px 40px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.06);
  @media (max-width: 1072px) {
    padding: 10px;
  }
`;

const StyledTimeline = styled.div`
  width: 100%;
  padding: 10px 10px 10px 0px;
  border-radius: 4px;
  background: linear-gradient(to left bottom, #eff6f9, #bde2ff);
`;

const StyledDay = styled.h3`
  font-size: 2rem;
  padding-left: 40px;
  @media (max-width: 425px) {
    padding-left: 10px;
  }
`;

let newHabitId;

const TimeLine = () => {
  const { timeLineData, dispatch: TimeLineDispatch } = useTimeLine();
  const { habits } = useHabit();
  const habitIds = habits?.map((val) => val.id);

  useEffect(() => {
    const todayDate = `${new Date().toISOString().split("T")[0]}`;
    const foundHabit =
      timeLineData && timeLineData?.find((element) => element.id === todayDate);

    // Add Timeline Data if habit is present
    if (!foundHabit && habitIds?.length > 0) {
      TimeLineDispatch({
        type: "ADD_TIMELINE",
        payload: { id: todayDate, habitIds },
      });
    } else if (foundHabit) {
      //Update Timeline Data if new habit is added
      const ExistingHabitIds = foundHabit.habits.map((habit) => habit.id);
      newHabitId = habitIds.filter(
        (habitId) => !ExistingHabitIds.includes(habitId)
      );

      //Update only if new habit is added, do not update when habit is edited
      if (newHabitId.length > 0) {
        TimeLineDispatch({
          type: "UPDATE_TIMELINE",
          payload: { id: todayDate, habitId: newHabitId[0] },
        });
      }
    }
  }, [habits]);

  const getTimelineData = () => {
    return timeLineData?.length > 0 ? (
      <StyledTimeline>
        {timeLineData?.map(({ id, habits }) => {
          const day = new Date(id).getDay();
          const dayText =
            new Date(id).getDate() === new Date().getDate()
              ? "Today"
              : new Date(id).getDate() === new Date().getDate() - 1
              ? "Yesterday"
              : getTimeLineDay(day);
          return (
            <div key={id}>
              <StyledDay>{dayText}</StyledDay>
              <TimeLineList
                key={id}
                timeLineId={id}
                habits={habits}
              ></TimeLineList>
            </div>
          );
        })}
      </StyledTimeline>
    ) : null;
  };

  return <StyledListContainer>{getTimelineData()}</StyledListContainer>;
};

export default TimeLine;
