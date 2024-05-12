import inquirer from "inquirer";
const currency = {
    Dollar: "277.2",
    AUS: "180.5",
    Yuan: "203",
    euro: "38.6",
    Yen: "1.91",
    Riyal: "73.4"
};
let UserAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "currency you convert from",
        type: "list",
        choices: ["Dollar", "AUS", "Yuan", "euro", "Yen", "Riyal"]
    },
    {
        name: "to",
        message: "currency you convert to ",
        type: "list",
        choices: ["Dollar", "AUS", "Yuan", "euro", "Yen", "Riyal"]
    },
    {
        name: "amount",
        message: "amount for convert",
        type: "number"
    }
]);
let convertFrom = currency[UserAnswer.from];
let convertTo = currency[UserAnswer.to];
let convertAmount = UserAnswer.amount;
// console.log (convertFrom)
// console.log (convertTo)
// console.log (convertAmount)
let converted = convertAmount / convertFrom;
let convertedAmount = converted * convertTo;
console.log(convertedAmount);
