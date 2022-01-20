// create your loops here.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 20; i += 2) {
  console.log(i);
}

let i = 100;
const text = 'Time till explosion ';
const ex = '!';
for (; i >= 0; +i--) {
  console.log(text + i + ex);
}
