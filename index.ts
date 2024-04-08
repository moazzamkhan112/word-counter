#! /usr/bin/env node
import inquirer from "inquirer"
   

const answer =await inquirer.prompt([
        {
            name:"sentence",
            type:"input",
            message:"Enter your sentence to count the words: "
        }
    ]
)



const answerinput=answer.sentence;
//for counting letters  in sentence


const wordswithoutspace =answerinput.replace(/\s/g, "");
const wordscount=wordswithoutspace.length;
console.log(`your sentence to count the words is ${wordscount}`)