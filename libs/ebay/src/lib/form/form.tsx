import { ReactElement } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize'; // Correct import from MUI
import styled from 'styled-components';

const StyledForm = styled.div`
  width: 75%;
  height: 80vh;
  border: 1px solid black;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled(TextareaAutosize)`
  width: fit-content;
  height: 50% !important; /* Set height to 50% of the parent container */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
`;
interface FormProps {
  textareaValue: string;
  onTextareaChange: (value: string) => void;
}

export const Form = ({
  textareaValue,
  onTextareaChange,
}: FormProps): ReactElement => {
  return (
    <StyledForm>
      <StyledTextarea
        value={textareaValue}
        onChange={(e) => onTextareaChange(e.target.value)}
        minRows={15} // Minimum rows for the TextareaAutosize
      />
    </StyledForm>
  );
};
