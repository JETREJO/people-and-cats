import { useQuery } from "@tanstack/react-query";

const useFetchRandomPeople = () => {

  const peopleCall = useQuery({
    queryKey: ['randomPeople'],
    queryFn: async () => {
      const response = await fetch('https://randomuser.me/api?results=10');
      if (!response.ok) {
        throw new Error('Failed to fetch people info');
      }
      return response.json();
    },
  });

  return peopleCall;
};

export default useFetchRandomPeople;