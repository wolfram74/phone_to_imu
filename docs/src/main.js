let sensors = {
    'acc':{},
    'grav':{},
    'gyro':{},
}

function start_loop(){
    console.log('go time')
    sensors.acc.output = new LinearAccelerationSensor({frequency:30})
    sensors.acc.log = []
    sensors.acc.output.addEventListener('reading', (e)=>{
        var entry = {}
        debugger
        entry.x = sensors.acc.output.x
        entry.y = sensors.acc.output.y
        entry.z = sensors.acc.output.z
        entry.t = sensors.acc.output.timestamp
        sensors.acc.log.push(entry)
    })
    sensors.acc.display =[
        document.getElementById('acc_x'),
        document.getElementById('acc_y'),
        document.getElementById('acc_z'),
        ]
    sensors.acc.output.start()
    setInterval(updateFields, 100)
}

function updateFields(){
    // console.log('updating')
    let last_acc_entry = sensors.acc.log.length-1
    // console.log(last_acc_entry)
    let acc_read = sensors.acc.log[last_acc_entry]
    let acc_vals = [acc_read.x, acc_read.y, acc_read.y]
    for (var i = 0; i <= 3; i++) {
        sensors.acc.display[i].innerText = `${acc_vals[i]}`
    }
}