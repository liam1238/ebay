import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { RandomUser } from '../utils/constants';

interface AppState {
  user: RandomUser | null;
  isLoading: boolean;
  error: string | null;
  textareaValue: string;
  updatedUser: RandomUser | null;
}

type Action =
  | { type: 'SET_USER'; payload: RandomUser | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_TEXTAREA_VALUE'; payload: string }
  | { type: 'SET_UPDATED_USER'; payload: RandomUser | null }
  | { type: 'RESET'; payload: RandomUser };

const initialState: AppState = {
  user: null,
  isLoading: false,
  error: null,
  textareaValue: '',
  updatedUser: null,
};

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_TEXTAREA_VALUE':
      return { ...state, textareaValue: action.payload };
    case 'SET_UPDATED_USER':
      return { ...state, updatedUser: action.payload };
    case 'RESET':
      return {
        ...state,
        textareaValue: JSON.stringify(action.payload, null, 2),
        updatedUser: action.payload,
      };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
