import { useState } from "react";
import styled from "styled-components";
import TimeLineContextProvider from "./reducer/timelineReducer";
import MyHabitProvider from "./reducer/habitReducer";
import HeatMapContainer from "./heatmap/HeatMapContainer";
import MyHabits from "./habit/MyHabit";
import TimeLine from "./timeline";
import Navbar from "./Navbar";

const StyledBodyContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 375px) {
    display: block;
  }
`;

const StyledHeatMap = styled.div`
  flex: 1.5;
`;

const StyledModalMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.65);
`;

const HabitContainer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleViewHabitModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div>
      <Navbar handleViewHabitModal={handleViewHabitModal} />
      {/* To pass the context of the habit */}
      <MyHabitProvider>
        {/* To pass the context fo the timeline */}
        <TimeLineContextProvider>
          <StyledBodyContainer>
            <TimeLine />
            <StyledHeatMap>{<HeatMapContainer />}</StyledHeatMap>
          </StyledBodyContainer>
          {showModal && (
            <StyledModalMask>
              <MyHabits cancel={setShowModal} />
            </StyledModalMask>
          )}
        </TimeLineContextProvider>
      </MyHabitProvider>
    </div>
  );
};

export default HabitContainer;
