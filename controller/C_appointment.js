// const M_appointment = require('../model/M_appointment')

const testFunc = (req, res, next)=>{
    console.log(req.body);
    // inser data into database or business logic()
    res.status(200).json({
        message: 'api sent successfully',
        data: req.body.message
    })
}

const test2 = (req, res, next)=>{
    console.log('test2')
    console.log(req.body);
    // insert data into database or business logic()
    res.status(200).json({
        message: 'test2',
        data: req.body.message
    })
}

const createAppointment = (req, res)=>{
    console.log(req.body)
    const {name, address, phone, carLicense,appointmentDate,mechanicName,carEngine } = req.body
    const date = new Date(appointmentDate)
    const client = new M_appointment.Client(name, address, phone,carLicense,date,mechanicName, carEngine);
  client.addClinet(carEngine, date);
    res.status(200).json({
        message: req.body
    })
}


const getAllAppointmentsAdmin = (req, res)=>{
    const {name, address, phone, carLicense,appointmentDate,mechanicName,carEngine } = req.body
}

const updateAppointmentAdmin = (req, res)=>{
    const {name, address, phone, carLicense,appointmentDate,mechanicName,carEngine } = req.body
}

const getAllAppointmentsClient = (req, res)=>{
    const {name, address, phone, carLicense,appointmentDate,mechanicName,carEngine } = req.body
}


module.exports.testFunc = testFunc
module.exports.test2 = test2
module.exports.createAppointment = createAppointment
exports.getAllAppointmentsAdmin = getAllAppointmentsAdmin
exports.updateAppointmentAdmin = updateAppointmentAdmin
exports.getAllAppointmentsClient = getAllAppointmentsClient