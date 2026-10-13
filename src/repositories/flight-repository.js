const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");
class FlightRepository extends CrudRepository {
      constructor() {
            super(Flight);
      }
      async getAllFlightsByQuery(filter) {
            console.log(filter);
            const response = await Flight.findAll({
                  where: filter,
            });
            return response;
      }
}

module.exports = FlightRepository;
