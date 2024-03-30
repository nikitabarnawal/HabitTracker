import styled from "styled-components";
import Button from "./common/Button";

const Navbar = ({ handleViewHabitModal }) => {
  return (
    <StyledHeaderContainer>
      <header>Habit Tracker</header>
      <Button
        label="My Habits"
        handleOnClick={handleViewHabitModal}
        disabled={false}
      />
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  padding: 14px 20px;
  color: #008be7;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.06);
  header {
    font-size: 3rem;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export default Navbar;
