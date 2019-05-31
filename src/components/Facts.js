
import React from 'react';
import PropTypes from 'prop-types';

function Facts({ facts }) {
  const factsList = facts.map((fact, i) => (
    <li key={i}>
      <p>{fact}</p>
    </li>
  ));

  return (
    <>
    <section>
      <header>Ron Swanson Facts</header>
      <ul>
        {factsList}
      </ul>
    </section>
    </>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
