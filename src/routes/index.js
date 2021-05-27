const router = require('express').Router()
const glob = require('glob')

glob.sync(`./src/routes/*.js`).forEach(async routeFile => {
    console.log(routeFile)
    const FileReplace = routeFile.replace('./src/routes/', '').replace('.js', '')
    if(FileReplace !== 'index') router.use(`/${FileReplace}`, require(`./${FileReplace}`))
})

module.exports = router