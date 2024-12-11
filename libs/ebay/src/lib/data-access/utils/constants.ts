import { EbayFormData, User } from './types';

export const RANDOM_USER_URL = 'https://randomuser.me/api/';

export const EMPTY_USER: User = {
  gender: '',
  name: {
    title: '',
    first: '',
    last: '',
  },
  location: {
    street: {
      number: 0,
      name: '',
    },
    city: '',
    state: '',
    country: '',
    postcode: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
    timezone: {
      offset: '',
      description: '',
    },
  },
  email: '',
  login: {
    uuid: '',
    username: '',
    password: '',
    salt: '',
    md5: '',
    sha1: '',
    sha256: '',
  },
  dob: {
    date: '',
    age: 0,
  },
  registered: {
    date: '',
    age: 0,
  },
  phone: '',
  cell: '',
  id: {
    name: '',
    value: '',
  },
  picture: {
    large: '',
    medium: '',
    thumbnail: '',
  },
  nat: '',
};
