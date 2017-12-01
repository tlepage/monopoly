function Player(name, icon) {
  this.name = name
  this.icon = icon

  this.cash = 1500
  this.ownedProperties = []
  this.boardPosition = 0
  this.getOutOfJailCards = 0

  this.exchangeCash = function(amount) {
    if (this.cash - Math.abs(amount) === 0) {
      this.cash = 0
    }

    this.cash += amount
  }

  this.move = function(count) {
    this.boardPosition += count
    if (this.boardPosition > BOARD_SQUARES - 1) {
      this.boardPosition = (this.boardPosition % (BOARD_SQUARES - 1)) - 1
    }
  }

  this.exchangeProperty = function(operation, propertyIndex) {
    if (operation === ADD) this.ownedProperties.push(propertyIndex)
    else this.ownedProperties.splice(this.ownedProperties.findIndex(propertyIndex), 1)
  }

  this.exchangeGetOutOfJailCards = function(amount) {
    this.getOutOfJailCards += amount
  }
}