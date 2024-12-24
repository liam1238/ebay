import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  width: 75%;
  height: 80vh;
  border: 1px solid black;
  margin: 5px;
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
      <textarea
        value={textareaValue}
        onChange={(e) => onTextareaChange(e.target.value)}
        style={{ width: '100%', height: '100%' }}
      ></textarea>
    </StyledForm>
  );
};
