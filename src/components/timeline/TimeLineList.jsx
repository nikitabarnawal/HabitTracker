import styled from "styled-components";
import PropTypes from "prop-types";
import TimeLineItem from "./TimeLineItem";

const StyledTimeLineList = styled.div`
  padding: 15px 0 10px 10px;
  margin-bottom: 15px;
  padding-left: 30px;
  width: 100%;
  border-bottom: 1px solid #fff;

  @media (max-width: 425px) {
    padding-left: 5px;
  }
`;

const TimeLineList = ({ timeLineId, habits }) => {
  return (
    <StyledTimeLineList>
      {habits?.map(({ id, done }) => {
        return (
          <TimeLineItem
            key={id}
            habitId={id}
            timeLineId={timeLineId}
            done={done}
          />
        );
      })}
    </StyledTimeLineList>
  );
};

TimeLineList.propTypes = {
  timeLineId: PropTypes.string,
  habits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
};

export default TimeLineList;
