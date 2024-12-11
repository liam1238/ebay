export interface EbayFormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  gender: string;
  dateOfBirth: string;
  age: string;
}

export interface RandomUserResponse {
  info: Info;
  results: User[];
}

export interface User {
  cell: string;
  dob: Dob;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  login: Login;
  name: Name;
  nat: string;
  phone: string;
  picture: Picture;
  registered: Registered;
}

export interface Name {
  first: string;
  last: string;
  title: string;
}

export interface Location {
  city: string;
  coordinates: Coordinates;
  country: string;
  postcode: string;
  state: string;
  street: Street;
  timezone: Timezone;
}

export interface Street {
  name: string;
  number: number;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  description: string;
  offset: string;
}

export interface Login {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

export interface Dob {
  age: number;
  date: string;
}

export interface Registered {
  age: number;
  date: string;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Info {
  page: number;
  results: number;
  seed: string;
  version: string;
}
