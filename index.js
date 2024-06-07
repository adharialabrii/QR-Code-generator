

import inquirer from 'inquirer'; //to get user input 
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
   {message: "type in URL",
name:"URL"}
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream('qr_img.png'));

fs.writeFile('url.txt', url, (err) => { //what is saved will be url in the url.yxy file
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });