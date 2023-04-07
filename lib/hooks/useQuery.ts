import { useQuery } from 'react-query';
import { getQuery } from '../queries/getQuery';
import useSupabase from './useSupabase';

function usePortfolioQuery(key: string) {
  const client = useSupabase();

  return useQuery(key, async () => {
    return getQuery(client, key).then((res: any) => res.data);
  });
}

export default usePortfolioQuery;
