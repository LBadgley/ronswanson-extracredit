import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Facts from '../components/Facts';
import { connect } from 'react-redux';
import { getFacts, getFactsLoading, getFactsError } from '../selectors/factsSelectors';
import { fetchFacts } from '../actions/factsActions';

class AllFacts extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    facts: PropTypes.array.isRequired,
    loading: PropTypes.any.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch(50);
  }

  render() {
    const { facts, loading, error } = this.props;
    if(loading) return <h1>Loading!</h1>;
    return <Facts facts={facts} error={error} />;
  }
}

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
)(AllFacts);
