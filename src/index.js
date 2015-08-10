var request = require('request')

module.exports = function(conf){

    function ping(){
        request.get({
            url: 'http://ping.heineiuo.com',
            qs: {appId: conf.appId}
        }, function(err, data) {

            if (err) {
                console.log(err)
                pingIp()
            } else {
                console.log(data.body)
            }
        })
    }

    function pingIp(){
        request.get({
            url: 'http://103.251.90.114:8129',
            qs: {appId: conf.appId}
        }, function(err, data) {

            if (err) {
                console.log(err)
            } else {
                console.log(data.body)
            }
        })
    }

    setInterval(ping, 1000*60)

}