import { useMemo } from 'react';
import { supabase } from '../supabase/supabase';

function useSupabase() {
  return useMemo(() => supabase, []);
}

export default useSupabase;
