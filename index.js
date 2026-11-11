// My first GitHub project
const greet = require('./helper');
const name = "Manigandan";

function welcomeUser(username) {
    return `Welcome to GitHub, ${username}!`;
}

console.log(welcomeUser(name));
greet(name).then((result)=>{
    console.log("result",result)
})