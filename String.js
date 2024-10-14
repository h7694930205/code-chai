const name = 'harsh';
const repoCount = 50;

// console.log(name + repoCount + 'value');

//console.log(`Hi ${name} repo ${repoCount}`); // this is Moden method syntext


const gameName = new String('harsh');

console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4); //it's also accepted the (-) number becouse it's show position

console.log(anotherString);

const newStringOne = "    Harsh   "

console.log(newStringOne.trim())