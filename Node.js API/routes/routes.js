module.exports = app => {
    const client = require("../controllers/clientController.js");
    const reservation = require("../controllers/reservationController.js");
    const seance = require("../controllers/seanceController.js");

    var router = require("express").Router();

    /***** CLIENTS *****/
    // Get all clients
    router.get("/clients/all", client.findAll);

    // Create a client user
    router.post("/clients/add", client.create);

    // Update a client by ID
    router.put("/clients/update/:id", client.update);

    // Delete a client by ID
    router.delete("/clients/delete/:id", client.delete);

    /***** RESERVATIONS *****/
    // Get all reservations
    router.get("/reservations/all", reservation.findAll);

    // Create a reservation
    router.post("/reservations/add", reservation.create);

    // Update a reservation by ID
    router.put("/reservations/update/:id", reservation.update);

    // Delete a reservation by ID
    router.delete("/reservations/delete/:id", reservation.delete);

    /***** SEANCES *****/
    // Get all seances
    router.get("/seances/all", seance.findAll);

    // Create a seance
    router.post("/seances/add", seance.create);

    // Update a seance by ID
    router.put("/seances/update/:id", seance.update);

    // Delete a seance by ID
    router.delete("/seances/delete/:id", seance.delete);

    app.use('/', router);
};