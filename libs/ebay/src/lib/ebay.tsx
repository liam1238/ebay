import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { EbayForm } from './ebayForm';
import { StyledHomePage } from './utils/styles';
import { User } from './data-access/utils/types';
import { EMPTY_USER } from './data-access/utils/constants';
import { randomUser } from './data-access/random-user';
import { Alert } from '@mui/material';

export const Ebay = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User>(EMPTY_USER);

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const newUser: User = await randomUser.getUser();
      setUser(newUser);
      setError(null);
    } catch (e) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <StyledHomePage>
      <h1>Welcome to Ebay!</h1>
      {error && <Alert severity="error">{error}</Alert>}
      {loading && <CircularProgress />}
      {!loading && <EbayForm defaultValues={user} />}
    </StyledHomePage>
  );
};
