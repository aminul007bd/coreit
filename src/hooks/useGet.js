import { useQuery } from '@tanstack/react-query';

const useGet = ({ endpoint, queryKey, options = {} }) => {
  const fetchData = async () => {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: fetchData,
    ...options,
  });
}

export default useGet;