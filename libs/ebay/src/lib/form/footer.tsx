import { Button } from '@mui/material';
import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  height: 15vh;
  border: 1px solid black;
  margin: 5px;
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
`;

interface FooterProps {
  onSave: () => void;
  onReset: () => void;
}

export const Footer = ({ onSave, onReset }: FooterProps): ReactElement => {
  return (
    <StyledFooter>
      <StyledButtons>
        <Button variant="contained" onClick={onSave} color="primary">
          Save
        </Button>
        <Button
          variant="outlined"
          onClick={onReset}
          color="error"
          style={{ marginLeft: '8px' }}
        >
          Reset
        </Button>
      </StyledButtons>
    </StyledFooter>
  );
};
