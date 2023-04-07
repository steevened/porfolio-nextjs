import { useMutation, QueryClient, useQueryClient } from 'react-query';
import { mutatePortfolio } from '../mutations/portfolioMutations';
import useSupabase from './useSupabase';
function usePortfolioMutation(key: string, data: any) {
  const client = useSupabase();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      return mutatePortfolio(client, key, data).then((res: any) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(key);
      },
    }
  );
}

export default usePortfolioMutation;
