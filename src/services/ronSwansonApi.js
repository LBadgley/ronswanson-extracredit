export const getFacts = () => {
  return fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/100')
    .then(res => ([res.ok, res.json]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch facts.';

      return json;
    });
};

