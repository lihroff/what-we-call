import path from 'node:path';
import fs from 'node:fs';

const loader = p => {
  const file = path.resolve(p);

  if (!fs.existsSync(file)) {
    throw new Error('File not exists.');
  }
  if (path.extname(file) !== '.json') {
    throw new Error('Must be JSON file.');
  }

  const abbr = fs.readFileSync(file, { encoding: 'utf8' });

  return JSON.parse(abbr);
};

export default loader;
