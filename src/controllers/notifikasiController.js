const antrianService = require('../services/antrianService')

exports.getNotifikasi = async (req, res) => {
    const listAntrian = await antrianService.get().catch(err => logger.error(err))

    res.json({
        data : listAntrian
    })
}

exports.send = async (req, res) => {
    const lastRecord = await antrianService.getLastRecord().catch(err => logger.error(err))
    var message = { 
        app_id: process.env.ONESIGNAL_APP_ID,
        headings : {"en" : 'Notifikasi Elektronik Antrian'},
        contents: {"en": `Perkara ${lastRecord.mejaNama} telah mengambil antrian Nomor ${lastRecord.nomor}`},
        included_segments: ["Subscribed Users"]
    };
      
    sendNotification(message);

    res.json({
        data : 'sukses'
    })
}

const sendNotification = (data) => {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": `Basic ${process.env.ONESIGNAL_AUTH}`
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    
    var https = require('https');
    var req = https.request(options, function(res) {  
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(data));
    req.end();
  };
  
