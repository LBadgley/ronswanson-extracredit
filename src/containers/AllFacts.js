import Facts from '../components/Facts';
import { connect } from 'react-redux';
import { getFacts, getFactsLoading, getFactsError } from '../selectors/factsSelectors';
import { fetchFacts } from '../actions/factsActions';
import { withFetch } from './withFetch';

const mapStateToProps = state => ({
  facts: getFacts(state),
  loading: getFactsLoading(state),
  error: getFactsError(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch(count) {
    dispatch(fetchFacts(count));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Facts));
