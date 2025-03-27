import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // Affiche : ES6
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = "Advanced Python"; // Corrigé : utilise une chaîne valide
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]); // Corrigé : utilise un nombre valide
} 
catch(err) {
    console.log(err);
}

