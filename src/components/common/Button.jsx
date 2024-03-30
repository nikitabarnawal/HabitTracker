import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled.button`
  background-color: #008be7;
  border-radius: 3px;
  padding: 10px 22px;
  font-size: 2rem;
  box-shadow: 0 0 0 1px #008be7;
  border: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
    outline: none;
    border: none;
    box-shadow: 0 0 0 0;
  }

  &:disabled::before {
    content: "You can add max 4 habits";
    width: 180px;
    position: absolute;
    top: 102%;
    left: 0%;
    transform: translateX(-50%);
    background-color: #bb2124;
    color: #fff;
    padding: 6px 6px;
    border-radius: 4px;
    font-size: 14px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  &:disabled:hover::before {
    opacity: 1;
  }
`;

const Button = ({ label, handleOnClick, disabled }) => {
  return (
    <StyledBtn onClick={() => handleOnClick()} disabled={disabled}>
      {label}
    </StyledBtn>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
