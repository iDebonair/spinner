const spinner = () => {
  const array = ['|', '/', '-', '\\', '|', '\n'];
  let duration = 0;
  for (const char of array) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, duration);
    duration += 200;
  }
};
spinner();
