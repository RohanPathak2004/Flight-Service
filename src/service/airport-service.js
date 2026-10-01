const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const message = require("../utils/Strings/message-strings");

const airportRepo = new AirportRepository();

async function getAirport(id) {
      try {
            const airport = await airportRepo.get(id);
            return airport;
      } catch (error) {
            throw error;
      }
}

async function getAllAirports() {
      try {
            const airports = await airportRepo.getAll();
            return airports;
      } catch (error) {
            console.log(error);
            throw new AppError(
                  "internal server error",
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}


async function destroyAirport(id) {
      try {
            const airport = await airportRepo.destroy(id);
            return airport;
      } catch (error) {
            throw new AppError("internal server error", StatusCodes.INTERNAL_SERVER_ERROR);
      }
}

async function updateAirport(id,data) {
      try {
            const updatedAirport = await airportRepo.update(id, data);
            return updatedAirport;
      } catch (error) {
            throw error;
      }
}

async function createAirport(data) {
      try {
            const airport = airportRepo.create(data);
            return airport;
      } catch (error) {
            if (error.name === "SequelizeValidationError") {
                  let explanation = [];
                  error.errors.forEach((err) => {
                        explanation.push(err.message);
                  });
                  throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError("internal server error", StatusCodes.INTERNAL_SERVER_ERROR);
            
            
      }
}


module.exports =  {
      getAirport,
      getAllAirports,
      destroyAirport,
      updateAirport,
      createAirport,
}