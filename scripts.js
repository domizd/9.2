var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var wszytskieImiona = femaleNames.concat(maleNames);
var newName = 'Marian';

console.log(wszytskieImiona);


if (wszytskieImiona.indexOf(newName) === -1); {
  wszytskieImiona.push(newName);
console.log(wszytskieImiona);
}