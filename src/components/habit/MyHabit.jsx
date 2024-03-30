import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import useHabit from "../hooks/useHabit";
import { v4 as uuidv4 } from "uuid";
import HabitItem from "./HabitItem";

const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-x"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

const StyledCardModal = styled.div`
  height: 500px;
  width: 700px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  position: absolute;
  top: 10%;
  left: 35%;
  @media (min-width: 360px) and (max-width: 768px) {
    top: 15%;
    left: 10%;
    width: 80%;
    height: auto;
  }
  button {
    padding: 5px 7px;
  }
`;

const StyledCloseModal = styled.div`
  outline: none;
  border: none;
  cursor: pointer;
`;

const StyledHeader = styled.header`
  height: 50px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;

const StyledBody = styled.div`
  padding: 30px;
  @media (max-width: 360px) {
    padding: 12px 0 0 5px;
  }
`;

const AddHabitBody = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.p`
  color: #008be7;
  font-size: 2rem;
`;

const StyledInput = styled.input`
  padding: 7px;
  flex: 1;
  margin-right: 10px;
  height: 44px;
  @media (max-width: 360px) {
    flex: 0;
  }
`;

const ViewHabitContainer = styled.div`
  min-height: 300px;
  border-radius: 5px;
`;

const StyledList = styled.ul`
  list-style-type: number;
  margin-top: 30px;
  width: 100%;
`;

const MyHabits = ({ cancel }) => {
  const [inputText, setInputText] = useState("");
  const { habits, dispatch } = useHabit();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputText]);

  const handleAddHabit = () => {
    dispatch({
      type: "ADD_HABIT",
      payload: { id: uuidv4(), todo: inputText, active: true },
    });

    setInputText("");
  };

  return (
    <StyledCardModal>
      <StyledHeader>
        <StyledTitle>My Habits</StyledTitle>
        <StyledCloseModal onClick={() => cancel()}>{close}</StyledCloseModal>
      </StyledHeader>
      <StyledBody>
        <AddHabitBody>
          <StyledInput
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            ref={inputRef}
          />
          <Button
            label="Add Habit"
            handleOnClick={handleAddHabit}
            disabled={habits?.length > 3 ? true : false}
          />
        </AddHabitBody>
        <ViewHabitContainer>
          <StyledList>
            {habits?.map(({ todo, id }) => (
              <HabitItem key={id} id={id} todo={todo} />
            ))}
          </StyledList>
        </ViewHabitContainer>
      </StyledBody>
    </StyledCardModal>
  );
};

export default MyHabits;
