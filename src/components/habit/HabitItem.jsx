import { useState } from "react";
import styled from "styled-components";
import useHabit from "../hooks/useHabit";

const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  padding: 5px;
`;

const StyledListItem = styled.li`
  font-size: 2rem;
  font-family: sans-serif;
  width: 80%;
  padding: 3px;
  margin-left: 20px;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: 10px;
  }
`;

const StyledEditTask = styled.span`
  display: inline-block;
  text-align: right;
  cursor: pointer;
`;

const StyledInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  flex: 1;
  height: 40px;
`;

const StyledButton = styled.button`
  background-color: #008be7;
  border-radius: 3px;
  padding: 7px 12px;
  font-size: 2rem;
  box-shadow: 0 0 0 1px #008be7;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const StyledEditContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const edit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
    <path d="M13.5 6.5l4 4" />
  </svg>
);

const HabitItem = ({ id, todo }) => {
  const [inputText, setInputText] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);

  const { dispatch } = useHabit();

  let taskContent = todo;

  const handleSave = () => {
    dispatch({ type: "EDIT_HABIT", id, todo: inputText });
    setIsEdit(false);
  };

  if (isEdit) {
    taskContent = (
      <StyledEditContainer>
        <StyledInput
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <StyledButton onClick={handleSave}>Save</StyledButton>
      </StyledEditContainer>
    );
  }

  return (
    <StyledListContainer key={id}>
      <StyledListItem>{taskContent}</StyledListItem>
      <StyledEditTask onClick={() => setIsEdit(true)}>{edit}</StyledEditTask>
    </StyledListContainer>
  );
};

export default HabitItem;
