const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories/index");
const AppError = require("../utils/errors/app-error");
const message = require("../utils/Strings/message-strings");
const cityRepository = new CityRepository();
async function createCity(data) {
      try {
            console.log(data);
            const city = await cityRepository.create(data);
            return city;
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

async function getCityById(id) {
      try {
            const city = await cityRepository.get(id);
            return city;
      } catch (error) {
            throw error;
      }
}

async function getAllCities() {
      try {
            const cities = await cityRepository.getAll();
            return cities;
      } catch (error) {
            throw new AppError(
                  message.somethingWentWrong,
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function destroyCity(id) {
      try {
            const city = await cityRepository.destroy(id);
            return city;
      } catch (error) {
            throw new AppError(
                  message.somethingWentWrong,
                  StatusCodes.INTERNAL_SERVER_ERROR,
            );
      }
}

async function updateCity(id,data) {
      try {
            const updatedCity = await cityRepository.update(id, data);
            return updatedCity;
      } catch (error) 
      {
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

module.exports = {
      createCity,
      getCityById,
      getAllCities,
      destroyCity,
      updateCity,
};
