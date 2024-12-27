import { GetNextPageParamFunction, QueryFunction } from "@tanstack/react-query";

export interface People {
  results: Result[];
  info: Info;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface Result {
  gender: Gender;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

interface Dob {
  date: Date;
  age: number;
}

enum Gender {
  Female = "female",
  Male = "male",
}

interface ID {
  name: string;
  value: null | string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Street {
  number: number;
  name: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

const LIMIT = 10;
export const queryKey = ["peopleData"];

export const queryFn: QueryFunction<People, typeof queryKey, number> = async ({
  pageParam = 0,
}): Promise<People> => {
  return await fetch(
    `https://randomuser.me/api?results=10&skip=${pageParam * LIMIT}`
  ).then((res) => res.json());
};

export const getNextPageParam: GetNextPageParamFunction<number, People> = (
  current,
  allPages
) => {
  //   const nextPage = current.next_page_url;
  const nextPage = allPages.length + 1;
  //   const lastPage = `${current.path}?page=${current.total - 1}` ;
  if (current.info.page === 100) return undefined;
  return nextPage;
};