import { useQuery } from "@tanstack/react-query";

const useFetchCatsFacts = () => {

  const catsCall = useQuery({
    queryKey: ['catsFacts'],
    queryFn: async () => {
      const response = await fetch('https://catfact.ninja/facts?limit=10');
      if (!response.ok) {
        throw new Error('Failed to fetch cat facts');
      }
      return response.json();
    },
  });

  return catsCall;
};

export default useFetchCatsFacts;
