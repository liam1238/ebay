import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { RandomUser } from '../utils/constants';

export const useRandomUser = () => {
  const [user, setUser] = useState<RandomUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://randomuser.me/api/');
        if (response.ok) {
          const res = await response.json();
          const data = get(res, 'results[0]', null) as RandomUser | null;
          setUser(data);
        } else {
          setError(`${response.status}: ${response.statusText}`);
        }
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        //   // error from the api
        // }
        // const res = await response.json();
        // const data = get(res, 'results[0]', null) as RandomUser | null;
        // setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { user, isLoading, error };
};
