const express = require("express");

const router = express.Router();

module.exports = () => {
    router.get('/', (request, response) => response.send("Speaker List"));

    router.get('/:shortName', (request, response) => response.send(`Details page of ${request.params.shortName}`));

    return router;
};