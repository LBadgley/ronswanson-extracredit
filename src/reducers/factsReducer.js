import { FETCH_FACTS, FETCH_FACTS_LOADING, FETCH_FACTS_ERROR } from '../actions/factsActions';

const initialState = {
  loading: false,
  list: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_FACTS_LOADING:
      return { ...state, loading: true };
    case FETCH_FACTS:
      return { ...state, error: null, loading: false, list: action.payload };
    case FETCH_FACTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
