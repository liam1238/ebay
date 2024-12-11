import styled from 'styled-components';

export const StyledHomePage = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
    color: pink;
    display: flex;
    justify-content: center;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .flex {
    display: flex;
    flex-direction: row;
  }
  .form-group {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
  }
  .radio-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .radio-label {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }
  .error {
    border: 1px solid red;
  }
  .error-msg {
    color: red;
  }
  button {
    margin-top: 16px;
    padding: 8px 16px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input {
    border-radius: 4px;
  }
`;
