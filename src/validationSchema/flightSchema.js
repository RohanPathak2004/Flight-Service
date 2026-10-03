const z = require("zod");

const FlightSchema = z.object({
      flightNumber: z.string().trim().min(1),
      airplaneId: z.number().int().positive(),
      departureAirportId: z.string().trim().min(1),
      arrivalAirportId: z.string().trim().min(1),
      arrivalTime: z.coerce.date(),
      departureTime: z.coerce.date(),
      boardingGate: z.string().trim().min(1),
      totalSeats: z.number().int().positive().max(1000),
      price: z.number().int().positive(),
});

module.exports = FlightSchema;
