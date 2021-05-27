const router = require('express').Router()
const notifikasiController = require('../controllers/notifikasiController')

router.route('/')
    .get(notifikasiController.getNotifikasi)

module.exports = router