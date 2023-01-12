import fileLoader from './file.mjs';
import urlLoader from './url.mjs';

export default async ({ loader = 'file', file, url }) => {
  switch (loader) {
    case 'file':
      return await fileLoader(file);
    case 'url':
      return await urlLoader(url);

    default:
      throw new Error('Loader not found.');
  }
};
