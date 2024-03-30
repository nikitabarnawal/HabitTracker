import styled from "styled-components";
import HeatMap from "@uiw/react-heat-map";
import PropTypes from "prop-types";

const HeatMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 30px;
  gap: 0.5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.06);
  @media (max-width: 320px) {
    display: block;
    padding: 10px;
  }
`;

const ResponsiveHeatMap = styled(HeatMap)`
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (min-width: 412px) and (max-width: 430px) {
    width: 400px;
  }
  @media (max-width: 390px) {
    width: 350px;
  }

  @media (min-width: 320px) and (max-width: 359px) {
    width: 300px;
  }
  @media (min-width: 1450px) and (max-width: 2560px) {
    width: 800px;
  }
`;

const HeatMapChart = ({ todo, value }) => {
  return (
    <HeatMapWrapper>
      <h2>{todo}</h2>
      <ResponsiveHeatMap
        width={750}
        value={value}
        rectSize={12}
        legendCellSize={0}
        startDate={new Date("2024/01/01")}
        panelColors={{
          1: "#239A3B",
        }}
      />
    </HeatMapWrapper>
  );
};

HeatMapChart.propTypes = {
  todo: PropTypes.string,
};
export default HeatMapChart;
