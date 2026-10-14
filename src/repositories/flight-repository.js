const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");
class FlightRepository extends CrudRepository {
      constructor() {
            super(Flight);
      }
      async getAllFlightsByQuery(filter, sortFilter) {
            console.log(filter,sortFilter);
            const response = await Flight.findAll({
                  where: filter,
                  order: sortFilter,
            });
            return response;
      }
}

module.exports = FlightRepository;
