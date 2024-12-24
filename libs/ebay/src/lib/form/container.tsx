import { ReactElement, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SideBar } from './sidebar';
import { Footer } from './footer';
import { Form } from './form';
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

export const MyContainer = (): ReactElement => {
  const { user, isLoading, error } = useRandomUser();
  const [textareaValue, setTextareaValue] = useState<string>('');
  const [updatedUser, setUpdatedUser] = useState<any>(null);

  // Use a ref to hold the debounced function
  const debouncedUpdateRef = useRef<ReturnType<typeof debounce>>();

  // Create debounced function in useEffect (runs once on mount)
  useEffect(() => {
    debouncedUpdateRef.current = debounce((value: string) => {
      try {
        const parsedValue = JSON.parse(value);
        setUpdatedUser(parsedValue); // Update user state
      } catch {
        console.error('Invalid JSON format');
      }
    }, 1000);

    // Cleanup on unmount
    return () => {
      debouncedUpdateRef.current?.cancel();
    };
  }, []);

  // Update textareaValue when user data is fetched
  useEffect(() => {
    if (user) {
      setTextareaValue(JSON.stringify(user, null, 2));
    }
  }, [user]);

  // Handle textarea changes
  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
    debouncedUpdateRef.current?.(value); // Call debounced function
  };

  const handleSave = () => {
    console.log('Saved data:', textareaValue);
  };

  const handleReset = () => {
    if (user) {
      setTextareaValue(JSON.stringify(user, null, 2));
      setUpdatedUser(user);
    }
    console.log('Reset to initial user data');
  };

  // Listen for updatedUser changes and log it
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
          <div style={{ display: 'flex', width: '100%' }}>
            <SideBar />
            <Form
              textareaValue={textareaValue}
              onTextareaChange={handleTextareaChange}
            />
          </div>
          <Footer onSave={handleSave} onReset={handleReset} />
        </div>
      )}
    </StyledContainer>
  );
};
