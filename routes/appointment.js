const express = require('express');

const C_appointment = require('../controller/C_appointment')
const C_searchResult = require('../controller/C_searchResult')
const C_host = require('../controller/C_host')
const C_user = require('../controller/C_user')
const router = express.Router();
const isAuth = require('../middleware/is-auth')



router.get('/appointment', C_appointment.testFunc);
router.get('/test', C_appointment.test2)
router.post('/client/create/appointment', C_appointment.createAppointment)
router.get('/admin/appoinments', C_appointment.getAllAppointmentsAdmin)
router.post('admin/appointment/update', C_appointment.updateAppointmentAdmin)
router.get('client/appointments', C_appointment.getAllAppointmentsClient)

router.get('/searchResult', C_searchResult.getSearchResult)
router.post('/addPlace', C_host.addPlace) // only host
router.post('/editPlace', isAuth ,C_host.editPlace) //only host
router.post('/fetchHostedPlaceList', isAuth, C_host.fetchHostedPlaceList) // only host
router.post('/fetchBookedPlaceList', isAuth, C_host.fetchBookedPlaceList) // only user
router.post('/createUser', C_user.createUser) 
router.post('/fetchSinglePlace', C_host.fetchSinglePlace)
router.post('/login', C_user.login )
router.post('/bookPlace',isAuth, C_host.bookPlace)
router.post('/deleteHostedPlace', C_host.deleteHostedPlace)


module.exports = router;


