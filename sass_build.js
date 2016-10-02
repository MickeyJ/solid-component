var sass = require('node-sass');
var fs = require('fs');

sass.render({
  file: './src/style/main.scss',
  outFile: './build/main.css',
}, function(error, result) {
  if(!error){

    fs.writeFile('./build/main.css', result.css, function(err){
      if(!err){

      } else {
        console.log(err);
      }
    });

  } else {

    console.log(error);
  }

});