const { StatusCodes } = require("http-status-codes");
const { createErrorResponse } = require("../utils/common");
const { FlightSchema } = require("../validationSchema");
const message = require("../utils/Strings/message-strings");

function validateCreateFlight(req, res, next) {
      try {
            const flightRequestBody = req.body;

            const validate = FlightSchema.safeParse(flightRequestBody);

            if (!validate) {
                  const errors = validate.error.flatten();
                  const ErrorResponse = createErrorResponse(
                        message.somethingWentWrong,
                        errors,
                  );
                  return res
                        .status(StatusCodes.BAD_REQUEST)
                        .json(ErrorResponse);
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
