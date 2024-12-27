import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { queryKey, getNextPageParam, queryFn } from "./getCatsData";

const useFetchCatsFacts = () => {

  // const catsCall = useQuery({
  //   queryKey: ['catsFacts'],
  //   queryFn: async () => {
  //     const response = await fetch('https://catfact.ninja/facts?limit=10');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch cat facts');
  //     }
  //     return response.json();
  //   },
  // });

  // const catsCall = useInfiniteQuery({
  //   queryKey: ["items"],
  //   queryFn: async ({ pageParam = 1 }) => {
  //     const response = await fetch('https://catfact.ninja/facts?limit=10');
  //     if (!response.ok) { throw new Error('Failed to fetch cat facts'); }
  //   },
  //   getNextPageParam: (lastPage, pages) =>
  //     lastPage.hasMore ? pages.length + 1 : undefined,
  // });.















  // const fetchFunction = async ( pageParam = 10 ) => {
  //   const response = await fetch(`https://catfact.ninja/facts?limit=${pageParam}`);
  //   if (!response.ok) { throw new Error('Failed to fetch cat facts'); }
  //   return response;
  // };

  // const infiniteObj = {
  //   queryKey: ["catsFacts"],
  //   queryFn: fetchFunction,
  //   initialPageParam: 0,
  //   // getNextPageParam: (lastPage, allPages, lastPageParam ) => {}
  //   getNextPageParam: (lastPage:any) => lastPage.nextPage,
  // }

  // const catsCall = useInfiniteQuery({
  //   queryKey: ["catsFacts"],
  //   queryFn: fetchFunction,
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage:any) => lastPage.nextPage,
  // });



  const query = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam,
  });

  return query;
};

export default useFetchCatsFacts;
