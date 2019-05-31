import { getFacts } from '../services/ronSwansonApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const FETCH_FACTS_LOADING = 'FETCH_FACTS_LOADING';
export const FETCH_FACTS_ERROR = 'FETCH_FACTS_ERROR';
export const fetchFacts = () => ({
  type: FETCH_FACTS,
  pendingType: FETCH_FACTS_LOADING,
  rejectedType: FETCH_FACTS_ERROR,
  payload: getFacts()
});

