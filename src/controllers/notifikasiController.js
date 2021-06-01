const antrianService = require('../services/antrianService')

exports.getNotifikasi = async (req, res) => {
    const listAntrian = await antrianService.get().catch(err => logger.error(err))

    res.json({
        data : listAntrian
    })
}

exports.addNotifikasi = async (req, res) => {
  const body = req.body
  antrianService.insert(body)
    .then(result => {
      sendOnClick(result)
        res.json({
          data : 'sukses'
      })
    })
    .catch(err => logger.error(err))
}


const sendOnClick = async (result) => {

  var message = { 
      app_id: process.env.ONESIGNAL_APP_ID,
      headings : {"en" : 'Notifikasi Elektronik Antrian'},
      contents: {"en": `Nomor Perkara ${result.nomor_perkara} oleh ${result.pihak} telah mengambil antrian Nomor ${result.nomor}`},
      included_segments: ["Subscribed Users"]
  };
    
  sendNotification(message);

 
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

    res.send({
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
  
