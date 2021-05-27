const Models = require('../models')

exports.get = () => {
    Models.DataAntrian.findAll().then(res => {
        return res
    }).catch(err => {
        throw err
    })
}