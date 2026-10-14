const FlightRepository = require("../repositories/flight-repository");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const message = require("../utils/Strings/message-strings");
const { Op } = require("sequelize");
const flightRepository = new FlightRepository();

async function createFlight(data) {
      try {
            console.log(data);
            const flight = await flightRepository.create(data);
            return flight;
      } catch (error) {
            console.log(error);
            if (
                  error.name === "SequelizeValidationError" ||
                  error.name === "SequelizeUniqueConstraintError"
            ) {
                  let explanation = [];
                  error.errors.forEach((err) => {
                        explanation.push(err.message);
                  });
                  throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError(
                  message.somethingWentWrong,
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function getFlightById(id) {
      try {
            const flight = await flightRepository.get(id);
            return flight;
      } catch (error) {
            throw error;
      }
}

async function getAllFlights() {
      try {
            const flights = await flightRepository.getAll();
            return flights;
      } catch (error) {
            throw new AppError(
                  message.somethingWentWrong,
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function destroyFlight(id) {
      try {
            const flight = await flightRepository.destroy(id);
            return flight;
      } catch (error) {
            throw new AppError(
                  message.somethingWentWrong,
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function updateFlight(id, data) {
      try {
            const updatedFlight = await flightRepository.update(id, data);
            return updatedFlight;
      } catch (error) {
            if (
                  error.name === "SequelizeValidationError" ||
                  error.name === "SequelizeUniqueConstraintError"
            ) {
                  let explanation = [];
                  error.errors.forEach((err) => {
                        explanation.push(err.message);
                  });
                  throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError(
                  message.somethingWentWrong,
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function getAllFlightsByQuery(query) {
      let customFilter = {};
      let sortFilter = [];
      //trips = BLR-DEL
      
      if (query.trips) {
            const [departureAirportId, arrivalAirportId] =
                  query.trips.split("-");
            customFilter.departureAirportId = departureAirportId;
            customFilter.arrivalAirportId = arrivalAirportId;
            // departureAirportId != arrivalAirportId
            if (departureAirportId === arrivalAirportId) {
                  throw new AppError(
                        "departure airport and arrival airport cannot be same",
                        StatusCodes.BAD_REQUEST,
                  );
            }
      }
      //MIN-MAX
      if (query.price) {
            const [minPrice, maxPrice] = query.price.split("-");
            customFilter.price = {
                  [Op.between]: [minPrice ?? 0, maxPrice ?? 20000],
            };
      }
      // travellers=3 etc
      if (query.travellers) {
            customFilter.totalSeats = {
                  [Op.gte]: query.travellers,
            };
      }
      //triDate=2026-10-14
      if (query.tripDate) {
            const currentDate = new Date(query.tripDate);
            console.log(currentDate);
            const nextDateObj = new Date(currentDate);
            nextDateObj.setDate(nextDateObj.getDate() + 1);
            const nextDate = nextDateObj.toISOString();
            customFilter.departureTime = {
                  [Op.gte]: currentDate,
                  [Op.lt]: nextDate,
            };
      }

      //departureTime_DESC,price_ASC 
      if (query.sort) {
            const sortQuery = query.sort.split(",");
            let sortingFilters = sortQuery.map((order) => order.split("_"));
            sortFilter = sortingFilters;
      }
      try {
            const flights =
                  await flightRepository.getAllFlightsByQuery(customFilter,sortFilter);
            return flights;
      } catch (error) {
            console.log(error);
            throw new AppError(
                  "cannot fetch all flights",
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

module.exports = {
      createFlight,
      updateFlight,
      destroyFlight,
      getFlightById,
      getAllFlights,
      getAllFlightsByQuery,
};
