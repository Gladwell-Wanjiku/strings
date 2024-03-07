let str = "extravaganza"
console.log(str.slice(-4));

let a = "The quick brown fox jumps over the lazy dog"
let b = "the"
let c = "brown"
console.log((a.match(/the/)).length);
console.log((a.match(/brown/)).length);

let d = "The pupils are reading in the library"
let e = "are"
let f = "The child was sitting on the table before it fell"
let g = "sitting"
console.log(d.includes(e));
console.log(f.includes(g));

let txt = "wonderful";
let result = txt.toUpperCase();
console.log(result);

let text = "UndERneath"
let answer = text.toLowerCase();
console.log(answer);

const title = "A wonderful world"
let titleCase = "";
title.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});
console.log(titleCase);
