const { StatusCodes } = require("http-status-codes");
const { generateMissingFieldResponse } = require("../utils/common");


async function validateCreateRequest(req, res, next) {
      if (!req.body.modelNumber) {
            return generateMissingFieldResponse(res, 'model number', StatusCodes.BAD_REQUEST);
      }

      next();
}

module.exports = {
      validateCreateRequest,
};
