const { AirplaneService } = require("../service");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, createErrorResponse } = require("./../utils/common");
const message = require("../utils/Strings/message-strings");

async function createAirplane(req, res) {
      try {
            const airplane = await AirplaneService.createAirplane({
                  modelNumber: req.body.modelNumber,
                  capacity: req.body.capacity,
            });

            SuccessResponse.data = airplane;
            SuccessResponse.message = message.created("airplane");

            return res.status(StatusCodes.CREATED).json(SuccessResponse);
      } catch (err) {
            console.log(err);
            ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  err,
            );
            return res.status(err.statusCode).json(ErrorResponse);
      }
}

async function getAirplanes(req, res) {
      try {
            const airplanes = await AirplaneService.getAirplanes();
            SuccessResponse.data = airplanes;
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            console.log(error);
            ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            console.log(ErrorResponse, "ErrorResponse");
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

async function getAirplaneById(req, res) {
      try {
            const id = req.params.id;
            const airplane = await AirplaneService.getAirplaneById(id);
            
            SuccessResponse.data = airplane;
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            console.log(error);
            ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            console.log(ErrorResponse, "ErrorResponse");
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

async function destroyAirplane(req, res) {
      try {
            const id = req.params.id;
            const airplane = await AirplaneService.destroyAirplane(id);
            SuccessResponse.data = airplane;
            SuccessResponse.message = message.deleted("airplane");
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            console.log(error);
            ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            console.log(ErrorResponse, "ErrorResponse");
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

async function updateAirplane(req, res) {
      try {
            const id = req.params.id;

            const data = req.body;
            console.log(data);
            const updatedAirplane = await AirplaneService.updateAirplane(
                  id,
                  data,
            );
            SuccessResponse.message = message.updated("airplane");
            SuccessResponse.data = updatedAirplane;
            return res.status(StatusCodes.OK).json(SuccessResponse);
      } catch (error) {
            console.log(error);
            ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

module.exports = {
      CreateAirplane: createAirplane,
      GetAirplanes: getAirplanes,
      GetAirplaneById: getAirplaneById,
      DestroyAirplane: destroyAirplane,
      UpdateAirplane:updateAirplane,
};
