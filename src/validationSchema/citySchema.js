const z = require("zod");

const CitySchema = z.object({
      name: z.string().trim().min(1).max(20),
});

module.exports = CitySchema;
