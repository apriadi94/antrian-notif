const Models = require('../models')
const moment = require('moment')

exports.get = () => {
    return new Promise((resolve, reject) => {
        Models.DataAntrian.findAll({
            where : {
                tanggal : moment().format('YYYY-MM-DD')
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

exports.getLastRecord = () => {
    return new Promise((resolve, reject) => {
        Models.DataAntrian.findOne({
            where : {
                tanggal : moment().format('YYYY-MM-DD')
            },
            order: [['id', 'DESC']],
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}