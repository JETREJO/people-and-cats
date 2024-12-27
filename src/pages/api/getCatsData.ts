import { GetNextPageParamFunction, QueryFunction } from "@tanstack/react-query";

export interface Cats {
    current_page:   number;
    data:           Datum[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  string;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

interface Datum {
    fact:   string;
    length: number;
}

interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}

const LIMIT = 10;
export const queryKey = ["catsData"];

export const queryFn: QueryFunction<Cats, typeof queryKey, number> = async ({
  pageParam = 0,
}): Promise<Cats> => {
  return await fetch(
    `https://catfact.ninja/facts?limit10&skip=${pageParam * LIMIT}`
  ).then((res) => res.json());
};

export const getNextPageParam: GetNextPageParamFunction<number, Cats> = (
  current,
  allPages
) => {
//   const nextPage = current.next_page_url;
const nextPage = allPages.length + 1;
//   const lastPage = `${current.path}?page=${current.total - 1}` ;
  if (current.current_page === current.last_page) return undefined;
  return nextPage;
};