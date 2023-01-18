import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const worldSplit = (input = "") => input.trim().split(/ +/);

const wwc = abbr => () => {
  const search = () => {
    rl.question(`Input keywords: `, input => {
      const keys = worldSplit(input);

      keys.forEach(k => {
        const key = k.trim();
        const val = abbr.get(key);

        if (val) {
          console.log(`[\x1b[36m${key}\x1b[0m]: \x1b[36m${val}\x1b[0m`);
        } else {
          console.log(`[\x1b[31m${key}\x1b[0m]: \x1b[31mNot found\x1b[0m`);
        }
      });

      search();
    });
  };

  search();
};

export default wwc;
