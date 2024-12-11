import { EMPTY_USER, RANDOM_USER_URL } from './utils/constants';
import { User } from './utils/types';
import { get } from 'lodash';

export const randomUser = {
  getUser: async (): Promise<User> => {
    const response = await fetch(RANDOM_USER_URL);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const user: User = get(data, 'results[0]', EMPTY_USER);
    return user;
  },

  // TODO: Implement the rest of the methods https://github.com/liam1238/ebay/issues/1
  //   deleteUser: () => {},
  //   getUsersList: () => {},
  //   updateUser: () => {},
  //   addUser: () => {},
};
