import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc ${props => (props.invalid ? 'red' : '#ccc')};
    background-color: ${props => props.invalid ? '#ffd7d7' : ''};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  /* way 2: remove
  &.invalid {
    border-color: red;
    background: #ffd7d7;
  } */

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isvalid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isvalid && 'isvalid'}> */}
      <FormControl invalid={!isvalid}>
        <label style={{ color: !isvalid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isvalid ? 'red' : 'black',
            background: !isvalid ? 'salmon' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      {/* <div className={`form-control ${!isvalid ? 'invalid' : ''}`}>
        <label style={{ color: !isvalid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isvalid ? 'red' : 'black',
            background: !isvalid ? 'salmon' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
