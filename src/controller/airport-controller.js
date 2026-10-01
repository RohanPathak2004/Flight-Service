const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../service");
const { createErrorResponse, SuccessResponse } = require("../utils/common");
const message = require("../utils/Strings/message-strings");

async function getAirport(req, res) { 
      try {
            const id = req.params.id;
            const airport = await AirportService.getAirport(id);
            SuccessResponse.data = airport;
            SuccessResponse.message = message.fetchedWithId('airport', id);
            return res.status(StatusCodes.OK).json(SuccessResponse); 
      } catch (error) {
            const ErrorResponse = createErrorResponse(message.somethingWentWrong, error);
            return res.status(error.statusCode).json(ErrorResponse);
      }
}
async function getAllAirport(req, res) { 
      try {
            const airports = await AirportService.getAllAirports();
            SuccessResponse.data = airports;
            SuccessResponse.message = message.fetched('airports');
            return res.status(StatusCodes.OK).json(SuccessResponse); 
      } catch (error) {
            console.log(error);
            const ErrorResponse = createErrorResponse(message.somethingWentWrong, error);
            return res.status(error.statusCode).json(ErrorResponse);
      }
}
async function createAirport(req, res) { 
      try {
            const airportRequestBody = {
                  name: req.body.name,
                  code: req.body.code,
                  address: req.body.address ?? null,
                  cityId: req.body.cityId
            }
            const airport = await AirportService.createAirport(airportRequestBody);
            SuccessResponse.data = airport;
            SuccessResponse.message = message.fetched('airport');
            return res.status(StatusCodes.CREATED).json(SuccessResponse); 
      } catch (error) {
            const ErrorResponse = createErrorResponse(message.somethingWentWrong, error);
            return res.status(error.statusCode).json(ErrorResponse);
      }
}
async function destroyAirport(req, res) {
      try {
            const id = req.params.id;
            const airport = await AirportService.destroyAirport(id);
            SuccessResponse.data = airport;
            SuccessResponse.message = message.deleted('airport');
            return res.status(StatusCodes.OK).json(SuccessResponse); 
      } catch (error) {
            const ErrorResponse = createErrorResponse(message.somethingWentWrong, error);
            return res.status(error.statusCode).json(ErrorResponse);
      }
}
async function updateAirport(req, res) {
      try {
            const id = req.params.id;
            const airportRequestBody = req.body;
            const airport = await AirportService.updateAirport(id,airportRequestBody);
            SuccessResponse.data = airport;
            SuccessResponse.message = message.updated('airport') ;
            return res.status(StatusCodes.OK).json(SuccessResponse); 
      } catch (error) {
            const ErrorResponse = createErrorResponse(message.somethingWentWrong, error);
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

module.exports = {
      GetAirport: getAirport,
      GetAllAirport: getAllAirport,
      CreateAirport: createAirport,
      DestroyAirport: destroyAirport,
      UpdateAirport: updateAirport,
}