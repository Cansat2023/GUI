// Code to generate sample data for Container and Payload and save it to a CSV file.
const fs = require('fs');

TEAM_ID = "1095";
PACKET_TYPES = ['C', 'T']


// Data generator for Container
function generateContainerData() {
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            team_id: TEAM_ID,
            // time in HH:MM:SS
            // add i seconds to time for simulation
            timestamp: new Date(new Date().getTime() + i * 1000).toLocaleTimeString(options = {
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
            gps_time: new Date(new Date().getTime() + i * 1000).toLocaleTimeString(options = {
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
        });
    }
    return data;
}

// add data to csv file
function addDataToCSV(data) {
    var csv = "";
    for (var i = 0; i < data.length; i++) {
        var row = "";
        for (var index in data[i]) {
            row += data[i][index] + ",";
        }
        row.slice(0, row.length - 1);
        csv += row + "\r\n";
    }
    return csv;
}

// generate data and save to a .csv file
function generateData() {
    var data = generateContainerData();
    var csv = addDataToCSV(data);
    fs.writeFileSync('./container.csv', csv, {
        encoding: "utf8",
        flag: "w",
      });
}

generateData()