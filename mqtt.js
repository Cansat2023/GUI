TEAM_ID = "team_id";
USERNAME = "username";
PASSWORD = "password";


// const mqtt = require('mqtt');
// const client = mqtt.connect('cansat.info', {
//     username: USERNAME,
//     password: PASSWORD,
//     port: 1883
// });


// client.on(
//     'connect',
//     () => {
//         client.subscribe('presence', (err) => {
//             if(!err){
//                 setInterval(() => {
//                     client.publish('teams/' + TEAM_ID, getData());
//                 }, 1000);
//             }
//         });
//     }
// )

PACKET_TYPES = ['C', 'T']

function getData(){
    var containerData = {
        team_id: TEAM_ID,
        // time in HH:MM:SS
        timestamp: new Date().toLocaleTimeString(options = {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }),
        packet_count: Math.round(Math.random() * 100),
        packet_type: PACKET_TYPES[0],
        mode: 'F',
        tp_released: 'R',
        // altitude with 0.1 resolution
        altitude: Math.round(Math.random() * 100) / 10,
        // temp in 0.1 C resolution
        temperature: Math.round(Math.random() * 100) / 10,
        // voltage in 0.01 V resolution
        voltage: Math.round(Math.random() * 100) / 100,
        gps_time: new Date().toLocaleTimeString(options = {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }),
        // gps latitude in 0.0001 resolution
        gps_latitude: Math.round(Math.random() * 100) / 10000,
        // gps longitude in 0.0001 resolution
        gps_longitude: Math.round(Math.random() * 100) / 10000,
        // gps altitude in 0.1 resolution
        gps_altitude: Math.round(Math.random() * 100) / 10,
        // gps sats in integer
        gps_sats: Math.round(Math.random() * 100),
        // Software state
        software_state: 'DESCENT',
        CMD_ECHO: 'CXON'
    }
    // create comma separated string
    var dataString = "";
    for (var key in containerData) {
        dataString += containerData[key] + ",";
    }
    // remove last comma
    dataString = dataString.substring(0, dataString.length - 1);
    return dataString;
}

console.log(getData());
