// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  }
  if (i % 5 === 0) {
    console.log(`${i} -> Simplified`)
  }
  else if (i % 3 === 0 && 1 % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`)
  }
}
