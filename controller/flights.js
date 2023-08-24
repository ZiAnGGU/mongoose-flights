const Flight = require('../model/flight');

module.exports = {
    new: newFlight,
    create,
};
// in our router : router.get('/new', flightCtrl.new) => we go to router check our class, and function name. 
function newFlight(req, res) {
    res.render('flights/new')
};

async function create(req, res) {
    console.log(req.body);
    try {
        await Flight.creat(req.body)
        res.redirect('/')
    } catch(err) {
    console.log(err);
    res.redirect('/flights/new')
    }
}