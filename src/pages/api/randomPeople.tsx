import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { queryKey, getNextPageParam, queryFn } from "./getPeopleData";

const useFetchRandomPeople = () => {

  const query = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam,
  });

  return query;

};

export default useFetchRandomPeople;