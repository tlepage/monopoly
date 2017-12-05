function Property(index, name, text, color, price, group, baseRent, improvedRents = []) {
  this.index = index
  this.name = name
  this.text = text
  this.color = color
  this.price = price
  this.group = group || 0
  this.baseRent = baseRent || 0
  if (improvedRents) this.improvedRents = Array.from(improvedRents)
  else this.improvedRents = []
  this.landCount = 0
  this.housePrice = 0

  if (group < 5) this.housePrice = 50
  else if (group === 5 || group === 6) this.housePrice = 100
  else if (group === 7 || group === 8) this.housePrice = 150
  else if (group > 8) this.housePrice = 200

  this.ownedBy = null
  this.houseCount = 0
  this.hotelCount = 0

  // for free parking
  this.pot = 0

  // railroad rent cost
  this.railroadRent = [0, 25, 50, 100, 200]
}

// LOOK AT CARD ORDER AND COUNT
const PROPERTIES = [
  new Property(GO, "GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF"),
  new Property(MEDITERRANEAN, "Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2, [10, 30, 90, 160, 250]),
  new Property(COMMUNITY_CHEST_0, "Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"),
  new Property(BALTIC, "Baltic Avenue", "$60", "#8B4513", 60, 3, 4, [20, 60, 180, 320, 450]),
  new Property(CITY_TAX, "City Tax", "Pay $200", "#FFFFFF", -200, -1),
  new Property(READING_RR, "Reading Railroad", "$200", "#FFFFFF", 200, 1),
  new Property(ORIENTAL, "Oriental Avenue", "$100", "#87CEEB", 100, 4, 6, [30, 90, 270, 400, 550]),
  new Property(CHANCE_0, "Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"),
  new Property(VERMONT, "Vermont Avenue", "$100", "#87CEEB", 100, 4, 6, [30, 90, 270, 400, 550]),
  new Property(CONNECTICUT, "Connecticut Avenue", "$120", "#87CEEB", 120, 4, 8, [40, 100, 300, 450, 600]),

  new Property(JAIL, "Just Visiting", "", "#FFFFFF"),
  new Property(ST_CHARLES, "St. Charles Place", "$140", "#FF0080", 140, 5, 10, [50, 150, 450, 625, 750]),
  new Property(ELECTRIC_CO, "Electric Company", "$150", "#FFFFFF", 150, 2),
  new Property(STATES, "States Avenue", "$140", "#FF0080", 140, 5, 10, [50, 150, 450, 625, 750]),
  new Property(VIRGINIA, "Virginia Avenue", "$160", "#FF0080", 160, 5, 12, [60, 180, 500, 700, 900]),
  new Property(PENNSYLVANIA_RR, "Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1),
  new Property(ST_JAMES, "St. James Place", "$180", "#FFA500", 180, 6, 14, [70, 200, 550, 750, 950]),
  new Property(COMMUNITY_CHEST_1, "Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"),
  new Property(TENNESSEE, "Tennessee Avenue", "$180", "#FFA500", 180, 6, 14, [70, 200, 550, 750, 950]),
  new Property(NEW_YORK, "New York Avenue", "$200", "#FFA500", 200, 6, 16, [80, 220, 600, 800, 1000]),

  new Property(FREE_PARKING, "Free Parking", "", "#FFFFFF"),
  new Property(KENTUCKY, "Kentucky Avenue", "$220", "#FF0000", 220, 7, 18, [90, 250, 700, 875, 1050]),
  new Property(CHANCE_1, "Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"),
  new Property(INDIANA, "Indiana Avenue", "$220", "#FF0000", 220, 7, 18, [90, 250, 700, 875, 1050]),
  new Property(ILLINOIS, "Illinois Avenue", "$240", "#FF0000", 240, 7, 20, [100, 300, 750, 925, 1100]),
  new Property(BO_RR, "B&O Railroad", "$200", "#FFFFFF", 200, 1),
  new Property(ATLANTIC, "Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22, [110, 330, 800, 975, 1150]),
  new Property(VENTNOR, "Ventnor Avenue", "$260", "#FFFF00", 260, 8, 22, [110, 330, 800, 975, 1150]),
  new Property(WATER_WORKS, "Water Works", "$150", "#FFFFFF", 150, 2),
  new Property(MARVIN_GARDENS, "Marvin Gardens", "$280", "#FFFF00", 280, 8, 24, [120, 360, 850, 1025, 1200]),

  new Property(GO_TO_JAIL, "Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF"),
  new Property(PACIFIC, "Pacific Avenue", "$300", "#008000", 300, 9, 26, [130, 390, 900, 110, 1275]),
  new Property(NORTH_CAROLINA, "North Carolina Avenue", "$300", "#008000", 300, 9, 26, [130, 390, 900, 110, 1275]),
  new Property(COMMUNITY_CHEST_2, "Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"),
  new Property(PENNSYLVANIA, "Pennsylvania Avenue", "$320", "#008000", 320, 9, 28, [150, 450, 1000, 1200, 1400]),
  new Property(SHORT_LINE_RR, "Short Line", "$200", "#FFFFFF", 200, 1),
  new Property(CHANCE_2, "Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"),
  new Property(PARK_PLACE, "Park Place", "$350", "#0000FF", 350, 10, 35, [175, 500, 1100, 1300, 1500]),
  new Property(LUXURY_TAX, "LUXURY TAX", "Pay $100", "#FFFFFF", -100, -1),
  new Property(BOARDWALK, "Boardwalk", "$400", "#0000FF", 400, 10, 50, [200, 600, 1400, 1700, 2000])
]

// these should be handled better and probably in property.js
var CHANCE_POSITIONS = [CHANCE_0, CHANCE_1, CHANCE_2]
var COMMUNITY_POSITIONS = [COMMUNITY_CHEST_0, COMMUNITY_CHEST_1, COMMUNITY_CHEST_2]
var RAILROAD_POSITIONS = [READING_RR, PENNSYLVANIA_RR, BO_RR, SHORT_LINE_RR]
var UTILITY_POSITIONS = [ELECTRIC_CO, WATER_WORKS]
var TAX_LOCATIONS = [CITY_TAX, LUXURY_TAX]