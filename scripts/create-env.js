const fs = require('fs')

fs.writeFilesSync('./.env', `API=${process.env.API}\n`)