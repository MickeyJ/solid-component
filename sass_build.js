var sass = require('node-sass');
var fs = require('fs');

sass.render({
  file: './src/style/main.scss',
  outFile: './build/main.css',
}, (error, result) =>{
  if(error) return console.error(error);

  fs.writeFile('./build/main.css', result.css, (err) =>{
    if(err) return console.error(err);

    // Do Something Else?
  });

});