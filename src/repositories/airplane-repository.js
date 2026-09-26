const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');


class AirPlaneRepository extends CrudRepository {

  constructor() {
    super(Airplane);
  }
  
}


module.exports = AirPlaneRepository;