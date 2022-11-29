#!/usr/bin/node

const occurences = parseInt(process.argv[2], 10);

if (isNaN(occurences)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < occurences; i++) {
    console.log('C is fun');
  }
}
