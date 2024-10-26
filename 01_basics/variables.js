const accountId = 144553
let accountEmail = "mansi@google.com "
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //one a const is declared it cannot be  changed

accountEmail="mp@mp.com"
accountPassword="21212121"
accountCity="Bengaluru"
let accountState;

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])