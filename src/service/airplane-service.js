const { StatusCodes } = require("http-status-codes");
const { AirPlaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const message = require("../utils/Strings/message-strings");

const airplaneRepo = new AirPlaneRepository();

async function createAirplane(data) {
      try {
            const airplane = await airplaneRepo.create(data);
            return airplane;
      } catch (error) {
            if (error.name === "SequelizeValidationError") {
                  let explanation = [];
                  error.errors.forEach((err) => {
                        explanation.push(err.message);
                  });
                  throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw error;
      }
}

async function getAirplanes() {
      try {
            const airplanes = await airplaneRepo.getAll();
            return airplanes;
      } catch (error) {
            throw new AppError(
                  "Cannot fetch airplanes",
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function getAirplaneById(id) {
      try {
            const airplane = await airplaneRepo.get(id);
            console.log(airplane);
            return airplane;
      } catch (error) {
            throw error;
      }
}

async function destroyAirplane(id) {
      try {
            const airplane = await airplaneRepo.destroy(id);
            return airplane;
      } catch (error) {
            throw new AppError(
                  "Cannot delete airplane",
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function updateAirplane(id, data) {
      try {
            console.log(id," ",data);
            const updatedAirplane = await airplaneRepo.update(id, data);
            console.log(updatedAirplane);
            return updatedAirplane;
      } catch (error) {
            throw error;
      }
}

module.exports = {
      createAirplane,
      getAirplanes,
      getAirplaneById,
      destroyAirplane,
      updateAirplane,
};
