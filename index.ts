#!usr/bin/env.node


import inquirer  from "inquirer";
import chalk from "chalk";
import chalkanimation, { rainbow } from "chalk-animation";
import { listenerCount } from "process";

const sleep = ()=>{
    return new Promise(res=>{
        setTimeout(res,2000);
    });
}


async function welcome(){
    let rainbowTitle =chalkanimation.rainbow('let start calculation'); //start
   await sleep(); 
   rainbowTitle.stop();
console.log(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);

    // console.log(`${rainbowTitle} is fine`);
}

await  welcome()

async function askQuestion(){
     const  answer = await inquirer
    .prompt([
       /*pass your question in here*/ 
     {
        type:"list",
        name:"operation",
        message:"which operation youn want to perform? \n",
        choices:["Addition", "subtractions","multiplication", "Division",]
      },
      {
        type:"input",
        name:"num1",
        message:"enter  number 1:",
      },
      {
        type:"input",
        name:"num2",
        message:"enter  number 2:",
      }
    ]);
    
    if 
    (answer.operation == "Addition"){
        console.log(chalk.green(`${answer.num1 }+ ${answer.num2} = ${answer.num1 + answer.num2}`));
    }
    else if 
    (answer.operation == "subtractions"){
        console.log(chalk.green(`${answer.num1 }- ${answer.num2} = ${answer.num1 - answer.num2}`));
    }
    else if
     (answer.operation == "multiplication"){
        console.log(chalk.green(`${answer.num1 }* ${answer.num2} = ${answer.num1 * answer.num2}`));
    }
    else if 
    (answer.operation == "Division"){
        console.log(chalk.green(`${answer.num1 }/ ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
    }; 



// askQuestion();

async function startagain(){
   do{
    await askQuestion();
    var again = await inquirer
    .prompt({
        type:"input",
        name:"restart",
        message:"Do you want to continue? press y or n: "
    })
   }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'Yes' || again.restart == 'YES')

}
    startagain();
