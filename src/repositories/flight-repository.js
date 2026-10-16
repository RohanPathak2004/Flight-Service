const CrudRepository = require("./crud-repository");
const { Flight, Airplane, City, Airport } = require("../models");
const { Sequelize } = require("sequelize");
class FlightRepository extends CrudRepository {
      constructor() {
            super(Flight);
      }
      async getAllFlightsByQuery(filter, sortFilter) {
            console.log(filter, sortFilter);
            const response = await Flight.findAll({
                  where: filter,
                  order: sortFilter,
                  include: [
                        {
                              model: Airplane,
                              require: true,
                        },
                        {
                              model: Airport,
                              require: true,
                              on: {
                                    col1: Sequelize.where(
                                          Sequelize.col(
                                                "Flight.departureAirportId",
                                          ),
                                          "=",
                                          Sequelize.col(
                                                "departureAirport.code",
                                          ),
                                    ),
                              },
                              as: "departureAirport",
                              include: [
                                    {
                                          model: City,
                                          require: true,
                                    },
                              ],
                        },
                        {
                              model: Airport,
                              require: true,
                              on: {
                                    col1: Sequelize.where(
                                          Sequelize.col(
                                                "Flight.arrivalAirportId",
                                          ),
                                          "=",
                                          Sequelize.col("arrivalAirport.code"),
                                    ),
                              },
                              as: "arrivalAirport",
                              include: [
                                    {
                                          model: City,
                                          require: true,
                                    },
                              ],
                        },
                  ],
            });
            return response;
      }
}

module.exports = FlightRepository;
