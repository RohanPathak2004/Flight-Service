const z = require("zod");

const AirportSchema = z.object({
      name: z.string().trim().min(1),
      code: z.string().trim().min(1),
      address: z.string().trim().min(1).optional(),
      cityId: z.number().positive(),
});

module.exports = AirportSchema;
