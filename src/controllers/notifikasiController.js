const antrianService = require('../services/antrianService')

exports.getNotifikasi = async (req, res) => {
    const listAntrian = await antrianService.get().catch(err => logger.error(err))

    res.json({
        data : listAntrian
    })
}