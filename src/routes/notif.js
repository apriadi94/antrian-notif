const router = require('express').Router()
const notifikasiController = require('../controllers/notifikasiController')

router.route('/')
    .get(notifikasiController.getNotifikasi)

router.route('/send')
    .get(notifikasiController.send)

module.exports = router