const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../service");
const { SuccessResponse } = require("../utils/common");
const message = require("../utils/Strings/message-strings");

async function createFlight(req, res) {
      try {
            const flightResponseBody = {
                  flightNumber: req.body.flightNumber,
                  airplaneId: req.body.airplaneId,
                  departureAirportId: req.body.departureAirportId,
                  arrivalAirportId: req.body.arrivalAirportId,
                  departureTime: req.body.departureTime,
                  arrivalTime: req.body.arrivalTime,
                  boardingGate: req.body.boardingGate,
                  totalSeats: req.body.totalSeats,
            };

            const flight = await FlightService.createFlight(flightResponseBody);
            SuccessResponse.data = flight;
            SuccessResponse.message = message.created("flight");
            return res.status(StatusCodes.CREATED).json(SuccessResponse);
      } catch (error) {
            const ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res.status(error.statusCode).json(ErrorResponse);
      }
}

module.exports = {
      createFlight,
}