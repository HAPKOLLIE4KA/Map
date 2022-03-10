const sqlCoprs =    "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Корпус\""
const sqlArchitecture = "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Архитектура\""
const sqlHostel =   "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Общежитие\""
const sqlPark =     "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Парк\""
const sqlCatering = "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Общепит\""
const sqlKafe =     "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Кафе\""
const sqlCinema = "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Кинотеатр\""
const sqlMuseum = "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Музей\""
const sqlTheatre = "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Театр\""
const sqlMonument = "SELECT `lat`,`lon`,`description`,`nameObject`,`address` FROM `objects` WHERE `typeObject` = \"Памятник\""

module.exports = {sqlCoprs, sqlArchitecture, sqlHostel, sqlPark, sqlCatering, sqlKafe, sqlCinema, sqlMuseum, sqlTheatre, sqlMonument};

// export {sqlCoprs, sqlArchitecture, sqlHostel, sqlPark, sqlCatering, sqlKafe, sqlCinema, sqlMuseum, sqlTheatre, sqlMonument};