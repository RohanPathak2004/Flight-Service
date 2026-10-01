const AppError = require('../errors/app-error')
const  createErrorResponse  = require("./error-response")
const message = require("../Strings/message-strings")
function generateMissingFieldResponse(res, fieldName, statusCode) {
      return res
            .status(statusCode)
            .json(
                  createErrorResponse(
                        message.missingField(fieldName),
                        new AppError(
                              message.missingField(fieldName),
                              statusCode,
                        ),
                  ),
            );
}
module.exports = generateMissingFieldResponse;