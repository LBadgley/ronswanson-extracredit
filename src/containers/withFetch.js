import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Comp => {
  class WithFetch extends PureComponent{
    static propTypes = {
      loading: PropTypes.bool.isRequired,
      fetch: PropTypes.func.isRequired
    }

    componentDidMount(){
      this.props.fetch();
    }

    render(){
      const { loading } = this.props;
      if(loading) return <h1>Loading</h1>;

      return (
        <>
          <Comp {...this.props} />
        </>
      );
    }
  }
  return WithFetch;
};
