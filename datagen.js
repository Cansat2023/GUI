// Code to generate sample data for Container and Payload and save it to a CSV file.
const fs = require('fs');
const Chance = require('chance');
var chance = new Chance();

TEAM_ID = "1095";
PACKET_TYPES = ['C', 'T']
START_TIME = 0;
MAX_ALTITUDE = 725; //make sure this is >= 725
MAX_TIME = 725;
DESCENT_RATE1 = 15;
DESCENT_RATE2 = 5;
P2_DEPLOY_ALTITUDE = 400;
TP_RELEASE_ALTITUDE = 300;

// Data generators for altitude
function generateAscentData(startTime, maxAltitude, maxTime){
    // generate data using a parabolic curve to simulate ascent
    let data = [];
    let time = startTime;
    let altitude = 0;
    let timeStep = 1;
    let focus = Math.pow(maxAltitude, 2)/maxTime;
    let timeSteps = Math.round(maxTime / timeStep);
    for (let i = 0; i < timeSteps; i++) {
        time += timeStep;
        altitude = Math.sqrt(focus*time);
        data.push({
            "time": time,
            "altitude": altitude
        });
    }
    return [data, time];
}

function generateDescentData1(startTime, maxAltitude, descentRate, p2DeployAltitude){
    let data = [];
    let time = startTime;
    let altitude = maxAltitude;
    let timeStep = 1;
    let timeSteps = Math.ceil((maxAltitude-p2DeployAltitude) / descentRate);
    for (let i = 0; i < timeSteps; i++) {
        time += timeStep;
        altitude = maxAltitude - (descentRate * (i+1));
        data.push({
            "time": time,
            "altitude": altitude
        });
    }
    return [data, time];
}

function generateDescentData2(startTime, p2DeployAltitude, descentRate){
    let data = [];
    let time = startTime;
    let altitude = p2DeployAltitude;
    let timeStep = 1;
    let timeSteps = Math.ceil(p2DeployAltitude / descentRate);
    for (let i = 0; i < timeSteps; i++) {
        time += timeStep;
        altitude = p2DeployAltitude - (descentRate * (i+1));
        data.push({
            "time": time,
            "altitude": altitude
        });
    }
    return [data, time];
}

function generateAltitudeData(startTime, maxAltitude, maxTime, descentRate1, descentRate2, p2DeployAltitude){
    let data = [];
    let ascent = generateAscentData(startTime, maxAltitude, maxTime);
    data.push(...ascent[0]);
    let descent1 = generateDescentData1(ascent[1], maxAltitude, descentRate1, p2DeployAltitude);
    // console.log(descent1[0]);
    data.push(...descent1[0]);
    let descent2 = generateDescentData2(descent1[1], p2DeployAltitude, descentRate2);
    data.push(...descent2[0]);
    return data;
}

// Data generator for Container
function generateContainerData() {
    let data = [];
    let altitudeData = generateAltitudeData(START_TIME, MAX_ALTITUDE, MAX_TIME, DESCENT_RATE1, DESCENT_RATE2, P2_DEPLOY_ALTITUDE);
    packet_count = 1;
    data.push({
        team_id: "TEAM_ID",
        // time in HH:MM:SS
        // add i seconds to time for simulation
        timestamp: "MISSION_TIME",
        packet_count: "PACKET_COUNT",
        packet_type: "PACKET_TYPE",
        mode: 'MODE',
        tp_released: 'TP_RELEASED',
        // altitude with 0.1 resolution
        altitude: "ALTITUDE",
        // temp in 0.1 C resolution
        temperature: "TEMPERATURE",
        // voltage in 0.01 V resolution
        voltage: "VOLTAGE",
        gps_time: 'GPS_TIME',
        // gps latitude in 0.0001 resolution
        gps_latitude: "GPS_LATITUDE",
        // gps longitude in 0.0001 resolution
        gps_longitude: "GPS_LONGITUDE",
        // gps altitude in 0.1 resolution
        gps_altitude: "GPS_ALTITUDE",
        // gps sats in integer
        gps_sats: "GPS_SATS",
        // Software state
        software_state: 'SOFTWARE_STATE',
        CMD_ECHO: 'CMD_ECHO'
    });
    let startDate = new Date().getTime();
    let software_state = 0;
    let software_states = ['', 'ASCENT', 'RELEASED', 'DESCENT1', 'LP_DEPLOY', 'DESCENT2', 'TP_RELEASE', 'TP_RELAY', 'RECOVERY'];
    for (let i = 0; i < altitudeData.length; i++) {
        if(altitudeData[i].altitude > 5 && software_state == 0){
            software_state = 1;
        } else if(altitudeData[i].altitude >= 725 && software_state == 1){
            software_state = 2;
        } else if(software_state == 2){
            software_state = 3;
        } else if(altitudeData[i].altitude <= P2_DEPLOY_ALTITUDE && software_state == 3){
            software_state = 4;
        } else if(software_state == 4){
            software_state = 5;
        } else if(altitudeData[i].altitude <= TP_RELEASE_ALTITUDE && software_state == 5){
            software_state = 6;
        } else if(software_state == 6){
            software_state = 7;
        } else if(altitudeData[i].altitude <= 5 && software_state == 7){
            software_state = 8;
        }
        data.push({
            team_id: TEAM_ID,
            // time in HH:MM:SS
            // add i seconds to time for simulation
            timestamp: new Date(startDate + i * 1000).toLocaleTimeString(options = {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
            packet_count: packet_count + i,
            packet_type: PACKET_TYPES[0],
            mode: 'S',
            tp_released: 'R',
            // altitude with 0.1 resolution
            altitude: Number.parseFloat(altitudeData[i].altitude).toFixed(1),
            // temp in 0.1 C resolution
            temperature: chance.floating({min: 24, max: 26, fixed: 1}),
            // voltage in 0.01 V resolution
            voltage: chance.floating({min: 8.5, max: 9, fixed: 2}),
            gps_time: new Date(startDate + i * 1000).toLocaleTimeString(options = {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
            // gps latitude in 0.0001 resolution
            gps_latitude: 28.6110,
            // gps longitude in 0.0001 resolution
            gps_longitude: 77.03845,
            // gps altitude in 0.1 resolution
            gps_altitude: Number.parseFloat(altitudeData[i].altitude).toFixed(1),
            // gps sats in integer
            gps_sats: 9,
            // Software state
            software_state: software_states[software_state],
            CMD_ECHO: 'CXON'
        });
    }
    return data;
}

// Data generator for Payload
function generatePayloadData() {
    let data = [];
    packet_count = 1;
    data.push({
        team_id: "TEAM_ID",
        // time in HH:MM:SS
        // add i seconds to time for simulation
        timestamp: "MISSION_TIME",
        packet_count: "PACKET_COUNT",
        packet_type: "PACKET_TYPE",
        // altitude with 0.1 resolution
        altitude: "ALTITUDE",
        // temp in 0.1 C resolution
        temperature: "TEMPERATURE",
        // voltage in 0.01 V resolution
        voltage: "VOLTAGE",
        // gyro roll pitch and yaw in degrees per second
        gyro_roll: "GYRO_ROLL",
        gyro_pitch: "GYRO_PITCH",
        gyro_yaw: "GYRO_YAW",
        // accel roll pitch and yaw in g
        accel_roll: "ACCEL_ROLL",
        accel_pitch: "ACCEL_PITCH",
        accel_yaw: "ACCEL_YAW",
        // mag roll pitch and yaw in gauss
        mag_roll: "MAG_ROLL",
        mag_pitch: "MAG_PITCH",
        mag_yaw: "MAG_YAW",
        // pointing error in degrees
        pointing_error: "POINTING_ERROR",
        // Software state
        software_state: 'SOFTWARE_STATE',
        // CMD_ECHO: 'CMD_ECHO'
    });
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
            packet_count: packet_count + i,
            packet_type: PACKET_TYPES[1],
            // altitude with 0.1 resolution
            altitude: Math.round(Math.random() * 100) / 10,
            // temp in 0.1 C resolution
            temperature: chance.floating({min: 24, max: 26, fixed: 1}),
            // voltage in 0.01 V resolution
            voltage: chance.floating({min: 8.5, max: 9, fixed: 2}), //8.4 to 9
            // gyro roll pitch and yaw in degrees per second
            gyro_roll: Math.round(Math.random() * 100) / 100,
            gyro_pitch: Math.round(Math.random() * 100) / 100,
            gyro_yaw: Math.round(Math.random() * 100) / 100,
            // accel roll pitch and yaw in g
            accel_roll: Math.round(Math.random() * 100) / 100,
            accel_pitch: Math.round(Math.random() * 100) / 100,
            accel_yaw: Math.round(Math.random() * 100) / 100,
            // mag roll pitch and yaw in gauss
            mag_roll: Math.round(Math.random() * 100) / 100,
            mag_pitch: Math.round(Math.random() * 100) / 100,
            mag_yaw: Math.round(Math.random() * 100) / 100,
            // pointing error in degrees
            pointing_error: Math.round(Math.random() * 100) / 100,
            // Software state
            software_state: 'RELEASED',
            // CMD_ECHO: 'PXON'
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
function createContainerData() {
    var datac = generateContainerData();
    var csv = addDataToCSV(datac);
    fs.writeFileSync('./container.csv', csv, {
        encoding: "utf8",
        flag: "w",
      });
}

// generate data and save to a .csv file
function createPayloadData() {
    var datap = generatePayloadData();
    var csv = addDataToCSV(datap);
    fs.writeFileSync('./payload.csv', csv, {
        encoding: "utf8",
        flag: "w",
    });
}


createContainerData();
createPayloadData();