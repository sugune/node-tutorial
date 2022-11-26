let boolean = false;

if (boolean) {
  console.log('hello world')
} else {
  console.log('goodbye world')
}

const message1 = 'i love myka';
const message2 = 'i like myka';

setInterval(() => {
  if (boolean) {
    console.log(message1);
    boolean = false;
  } else {
    console.log(message2)
    boolean = true;
  }
}, 100)
