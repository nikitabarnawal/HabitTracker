import styled from "styled-components";
import PropTypes from "prop-types";
import useTimeLine from "../hooks/useTimeLine";
import useHabit from "../hooks/useHabit";
import { getItem } from "../../utils";

const StyledItem = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: sans-serif;
  padding: 5px;
`;

const StyledInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const TimeLineItem = ({ habitId, timeLineId, done }) => {
  const { dispatch } = useTimeLine();
  const { habits } = useHabit();
  const { todo } = getItem(habitId, habits);
  return (
    <StyledItem>
      <StyledInput
        type="checkbox"
        checked={done}
        onChange={() =>
          dispatch({
            type: "UPDATE_TIMELINE_CHECKBOX",
            id: timeLineId,
            habitId: habitId,
          })
        }
      ></StyledInput>
      <p>{todo}</p>
    </StyledItem>
  );
};

TimeLineItem.propTypes = {
  habitId: PropTypes.string.isRequired,
  timeLineId: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  todo: PropTypes.string,
};

export default TimeLineItem;
