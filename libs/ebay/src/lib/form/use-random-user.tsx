import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { get } from 'lodash';

export const useRandomUser = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) throw new Error('Network response was not ok');
        const res = await response.json();
        const data = get(res, 'results[0]', null);
        dispatch({ type: 'SET_USER', payload: data });
        dispatch({
          type: 'SET_TEXTAREA_VALUE',
          payload: JSON.stringify(data, null, 2),
        });
      } catch (err) {
        dispatch({
          type: 'SET_ERROR',
          payload: err instanceof Error ? err.message : 'Unknown error',
        });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchData();
  }, [dispatch]);
};
