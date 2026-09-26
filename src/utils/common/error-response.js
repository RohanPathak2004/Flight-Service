
function createErrorResponse(message,error) {
  return {
    success: false,
    message,
    data: {},
    error
  }
}

module.exports = createErrorResponse;