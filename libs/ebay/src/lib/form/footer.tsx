import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  height: 15vh;
  border: 1px solid black;
  margin: 5px;
`;

interface FooterProps {
  onSave: () => void;
  onReset: () => void;
}

export const Footer = ({ onSave, onReset }: FooterProps): ReactElement => {
  return (
    <StyledFooter>
      <button type='button' onClick={onSave}>
        Save
      </button>
      <button type='button' onClick={onReset}>
        Reset
      </button>
    </StyledFooter>
  );
};
