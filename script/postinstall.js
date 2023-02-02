import fs from "node:fs";
import path from "node:path";

const DOT_FILE = ".whatwecall";

fs.copyFile(DOT_FILE, path.resolve(process.env.HOME, DOT_FILE), 1, err => {
  if (err) throw err;
});
