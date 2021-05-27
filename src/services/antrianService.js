const Models = require('../models')

exports.get = () => {
    return new Promise((resolve, reject) => {
        Models.DataAntrian.findAll().then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}