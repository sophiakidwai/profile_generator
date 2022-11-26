const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  rl.question("What's you're favourite food?", (answer1) => {
    rl.question("What's an activity you like doing?", (answer2) => {
      rl.question("What is your favourite travel destination?", (answer3) => {
        rl.question("How old are you?", (answer4) => {

          console.log(`Thats a great name ${answer}! Eww, ${answer1} is gross... I love ${answer2} too! I've never been to ${answer3} but I would love to go someday. Wow you're ${answer4} year old? Thats pretty old. I dont talk to old people, bye!`);





          rl.close();
        });
      });
    });
  });
});

