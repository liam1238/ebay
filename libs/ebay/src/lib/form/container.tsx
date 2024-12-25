import { ReactElement, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { SideBar } from './sidebar';
import { Footer } from './footer';
import { Form } from './form';
import { useAppContext } from '../context/AppContext';
import { useRandomUser } from './use-random-user';
import debounce from 'lodash/debounce';

const StyledContainer = styled.div`
  border: 1px solid black;
  width: calc(100% - 12px);
  margin: 5px;
  height: calc(100vh - 12px);
  display: flex;
  flex-direction: column;
`;

const StyledFlexDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const MyContainer = (): ReactElement => {
  const { state, dispatch } = useAppContext();
  const { user, isLoading, error, textareaValue, updatedUser } = state;

  useRandomUser(); // Fetch data from the Random User API

  // We are using useMemo here to ensures that the debounce function remains the same reference between renders unless dispatch changes.
  const debouncedUpdate = useMemo(
    () =>
      debounce((value: string) => {
        try {
          const parsedValue = JSON.parse(value);
          dispatch({ type: 'SET_UPDATED_USER', payload: parsedValue });
        } catch {
          console.error('Invalid JSON format');
        }
      }, 1000),
    [dispatch]
  );

  const handleTextareaChange = (value: string) => {
    dispatch({ type: 'SET_TEXTAREA_VALUE', payload: value });
    debouncedUpdate(value);
  };

  const handleSave = () => {
    console.log('Saved data:', textareaValue);
  };

  const handleReset = () => {
    if (user) {
      dispatch({ type: 'RESET', payload: user });
    }
    console.log('Reset to initial user data');
  };

  useEffect(() => {
    if (updatedUser) {
      console.log('Debounced User updated:', updatedUser);
    }
  }, [updatedUser]);

  return (
    <StyledContainer>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!error && !isLoading && (
        <div>
          <StyledFlexDiv>
            <SideBar />
            <Form
              textareaValue={textareaValue}
              onTextareaChange={handleTextareaChange}
            />
          </StyledFlexDiv>
          <Footer onSave={handleSave} onReset={handleReset} />
        </div>
      )}
    </StyledContainer>
  );
};
