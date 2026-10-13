const { StatusCodes } = require("http-status-codes");
const { createErrorResponse } = require("../utils/common");
const { FlightSchema } = require("../validationSchema");
const message = require("../utils/Strings/message-strings");
const { compareDate } = require("../utils/common/validateDateTime");
const AppError = require("../utils/errors/app-error");

function validateCreateFlight(req, res, next) {
      try {
            const flightRequestBody = req.body;

            const validate = FlightSchema.safeParse(flightRequestBody);
            
            if (!validate.success) {
                  const errors = validate.error.flatten();
                  const ErrorResponse = createErrorResponse(
                        message.somethingWentWrong,
                        errors,
                  );
                  return res
                        .status(StatusCodes.BAD_REQUEST)
                        .json(ErrorResponse);
            }
            if (compareDate(flightRequestBody.departureTime, flightRequestBody.arrivalTime)) {
                  let error = new AppError('departure time cannot be greater than arrival time.', StatusCodes.BAD_REQUEST);
                  const ErrorResponse = createErrorResponse(message.somethingWentWrong, error);
                  return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
            }
            
            next();
      } catch (error) {
            const ErrorResponse = createErrorResponse(
                  message.somethingWentWrong,
                  error,
            );
            return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse);
      }
}

module.exports = {
      validateCreateFlight,
};
