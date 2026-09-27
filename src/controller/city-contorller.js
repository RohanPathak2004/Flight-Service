const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../service/index");
const { SuccessResponse, createErrorResponse } = require("../utils/common");
const message = require("../utils/Strings/message-strings");

async function createCity(req, res) {
      console.log(req.body.name);
      try {
            const savedCity = await CityService.createCity({
                  name: req.body.name,
            });
            SuccessResponse.data = savedCity;
            SuccessResponse.message = message.created("City");
            return res.status(StatusCodes.CREATED).json(SuccessResponse);
      } catch (error) {
            const ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

async function getAllCities(req, res) {
      try {
            const cities = await CityService.getAllCities();
            SuccessResponse.data = cities;
            SuccessResponse.message = message.fetched("cities");
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            const ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

async function updateCity(req, res) {
      try {
            const id = req.params.id;

            const updatedCity = await CityService.updateCity(id, {
                  name: req.body.name,
            });
            SuccessResponse.data = updatedCity;
            SuccessResponse.message = message.updated("city");
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            const ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

async function destroyCity(req, res) {
      try {
            const id = req.params.id;
            const city = await CityService.destroyCity(id);
            SuccessResponse.data = city;
            SuccessResponse.message = message.deleted("city");
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            const ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

async function getCityById(req, res) {
      try {
            const id = req.params.id;
            const city = await CityService.getCityById(id);
            SuccessResponse.data = city;
            SuccessResponse.message = message.fetchedWithId("city", id);
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            const ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

module.exports = {
      CreateCity: createCity,
      GetAllCities: getAllCities,
      GetCityById: getCityById,
      updateCity: updateCity,
      DestroyCity: destroyCity,
};
