const { readFile, writeFile } = require('fs');

readFile('./storage/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  const first = result;
  readFile('./storage/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      returnn
    }
    const second = result;
    writeFile(
      './storage/message-2.txt',
      `${second} \n${first}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
      }
    )
  });
});