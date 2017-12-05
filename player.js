function Player(name, icon) {
  this.name = name
  this.icon = icon

  this.cash = 1500
  this.ownedProperties = []
  this.totalHouses = 0
  this.totalHotels = 0
  this.totalRailroads = 0
  this.position = 0
  this.playerLastPosition = this.position

  this.getOutOfJailCards = []
  this.inJail = false
  this.turnsLeftInJail = 0

  this.currentRoll = 0

  this.exchangeCash = function(amount) {
    if (this.cash - Math.abs(amount) === 0) {
      this.cash = 0
    }
    this.cash += amount
  }

  this.move = function(count) {
    this.lastPosition = this.position
    this.position += count
    if (this.position > BOARD_SQUARES - 1) {
      this.position = (this.position % (BOARD_SQUARES - 1)) - 1
    }
  }

  this.moveTo = function(pos) {
    this.position = pos;
  }

  this.reduceJailTurn = function() {
    this.turnsLeftInJail -= 1
    if (this.turnsLeftInJail === 0) this.getOutOfJail()
  }

  this.getOutOfJail = function() {
    this.turnsLeftInJail = 0
    this.inJail = false
  }

  this.goToJail = function() { 
    this.turnsLeftInJail = 3
    this.inJail = true
  }

  this.exchangeProperty = function(operation, propertyIndex) {
    if (operation === ADD) this.ownedProperties.push(propertyIndex)
    else this.ownedProperties.splice(this.ownedProperties.findIndex(propertyIndex), 1)
  }

  this.exchangeGetOutOfJailCards = function(card) {
    if (card !== null) this.getOutOfJailCards.push(card)
    else this.getOutOfJailCards.shift()
  }
}