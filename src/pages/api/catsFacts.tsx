import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { queryKey, getNextPageParam, queryFn } from "./getCatsData";

const useFetchCatsFacts = () => {

  const query = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam,
  });

  return query;
};

export default useFetchCatsFacts;
