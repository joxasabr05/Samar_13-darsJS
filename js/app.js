const name = prompt("Enter your name, (Please)");
const surname = prompt("Enter your surname, (Please)");
const age = prompt("Enter your age (Please)");
const personInfo = {
  name: name,
  surname: surname,
  age: age,
};

if (age < 10) {
  console.log("You very small to enter this site");
} else if (age < 20) {
  console.log(`Welcom ${name} ${surname}, you come in kino club`);
  console.log(
    `Your information your name: ${personInfo.name}, your surname: ${personInfo.surname} and your age: ${personInfo.age}`
  );
  console.log(`All info: ${personInfo[name]}`);
} else if (age < 50) {
  console.log(
    `${name} ${surname}, you not entry on this site becouse you very old person, sorry `
  );
} else {
  console.log(
    `Something not work, sorry ${name} ${surname} you not entry to this site`
  );
  console.log("Please try now");
}
