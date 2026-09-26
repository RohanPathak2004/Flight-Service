const { StatusCodes } = require("http-status-codes")
const { createErrorResponse } = require('../utils/common')
const message = require('../utils/Strings/message-strings')
const AppError  = require('../utils/errors/app-error')
async function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    const errorResponse = createErrorResponse(message.missingField('model number'), new AppError([message.missingField('model number')],StatusCodes.BAD_REQUEST))
    return res.status(StatusCodes.BAD_REQUEST)
      .json(errorResponse)
  }

  next();
}

module.exports = {
  validateCreateRequest
}