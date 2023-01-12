import fetch from 'node-fetch';

export default url => {
  if (!url) {
    throw new Error('url must provide.');
  }

  return fetch(url).then(res => res.json());
};
