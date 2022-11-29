#!/usr/bin/node

const k = parseInt(process.argv[2], 10);
if (isNaN(k)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + k);
}
