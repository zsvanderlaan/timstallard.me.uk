# [timstallard.me.uk](https://timstallard.me.uk)

This is the code behind timstallard.me.uk, which is built using Docpad.

### To run:  
1. You'll need Node and npm to be installed
2. Install dependencies, by running `npm i`
3. Automagically compile the site and run a web server using `docpad run`  
   (note: you'll need to use `docpad.cmd` on Windows, due to an bug, since a plain js docpad config file is being used, rather than coffeescript)

### To compile the site for deployment:  
1. Run `docpad clean` to remove dev files
2. Run `docpad generate --env=static`
3. Copy contactsubmit/conf.example.php to contactsubmit/conf.php, and update options as required

&copy; Tim Stallard 2016
