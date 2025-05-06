const accountId = 121212; 
let accountEmail = "shivam123@gmail.com";
var accountPassword = "123456";
accountCity = "Lucknow";
let accountState;
// accountId = 2; 
accountEmail = "hitesh@gmail.com";
accountPassword = "123456789";
accountCity = "Delhi";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);
/*
prefered not to use var 
beacuse of issue in block scope and functional scope


*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);