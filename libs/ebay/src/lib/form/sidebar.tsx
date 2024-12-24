import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  width: 25%;
  height: 80vh;
  border: 1px solid black;
  margin: 5px;
`;

export const SideBar = (): ReactElement => {
  return <StyledSideBar></StyledSideBar>;
};
