export const getFactsState = state => state.facts;
export const getFacts = state => getFactsState(state).list;
export const getFactsLoading = state => getFactsState(state).loading;
export const getFactsError = state => getFactsState(state).error;
