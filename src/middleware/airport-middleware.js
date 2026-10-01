const { StatusCodes } = require("http-status-codes");
const { generateMissingFieldResponse } = require("../utils/common");
const message = require("../utils/Strings/message-strings");
const AppError = require("../utils/errors/app-error");

function validateCreateAirport(req, res, next) {
      // name, address, code, cityId, except address if any of the field is missing return bad request.
      const { name, code, cityId } = req.body;
      if (!name || !(name.trim())) {
            return generateMissingFieldResponse(res,"name", StatusCodes.BAD_REQUEST);
      }
      if (!code || !(code.trim())) {
            return generateMissingFieldResponse(res,"code", StatusCodes.BAD_REQUEST);
      }
      if (!cityId) {
            return generateMissingFieldResponse(res,"cityId", StatusCodes.BAD_REQUEST);
      }

      next();
}




module.exports = {
      ValidateCreateAirport: validateCreateAirport,
};
