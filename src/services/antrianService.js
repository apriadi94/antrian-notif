const Models = require('../models')
const moment = require('moment')

exports.get = () => {
    return new Promise((resolve, reject) => {
        Models.Notif.findAll({
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

exports.insert = (body) => {
    return new Promise(async (resolve, reject) => {

        const lastRecord = await this.getLastRecord()
        if(lastRecord){
            body.nomor = lastRecord.nomor + 1
        }else{
            body.nomor = 1
        }
        
        Models.Notif.create(body).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

exports.getLastRecord = () => {
    return new Promise((resolve, reject) => {
        Models.Notif.findOne({
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