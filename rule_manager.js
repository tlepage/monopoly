const functionMap = new Map();
functionMap.set(ACTION_GET_OUT_OF_JAIL_FREE, function(player, card) {
  player.exchangeGetOutOfJailCards(card)
  console.log(player.name + " acquired Get Out of Jail Free Card, " + player.getOutOfJailCards.length)
})
functionMap.set(ACTION_ADVANCE_TO_GO, function(player, card) {
  player.moveTo(GO)
  player.exchangeCash(200)
  console.log(player.name + " went to GO, ", player.position, player.cash)
})
functionMap.set(ACTION_GO_TO_JAIL, function(player, card) {
  player.moveTo(JAIL)
  player.goToJail()
  console.log(player.name + " went to Jail", player.position, player.turnsLeftInJail)
})
functionMap.set(ACTION_BEAUTY_CONTEST, function(player, card) {
  player.exchangeCash(10)
})
functionMap.set(ACTION_STOCK_SALE, function(player, card) {
  player.exchangeCash(50)
})
functionMap.set(ACTION_INSURANCE_MATURES, function(player, card) {
  player.exchangeCash(100)
})
functionMap.set(ACTION_INCOME_TAX_REFUND, function(player, card) {
  player.exchangeCash(20)
})
functionMap.set(ACTION_HOLIDAY_FUND, function(player, card) {
  player.exchangeCash(100)
})
functionMap.set(ACTION_INHERIT, function(player, card) {
  player.exchangeCash(100)
})
functionMap.set(ACTION_CONSULTANCY, function(player, card) {
  player.exchangeCash(25)
})
functionMap.set(ACTION_HOSPITAL_FEE, function(player, card) {
  player.exchangeCash(-100)
  PROPERTIES[FREE_PARKING].pot += 100
})
functionMap.set(ACTION_BANK_ERROR, function(player, card) {
  player.exchangeCash(200)
})
functionMap.set(ACTION_SCHOOL_FEES, function(player, card) {
  player.exchangeCash(-50)
  PROPERTIES[FREE_PARKING].pot += 50
})
functionMap.set(ACTION_DOCTOR_FEE, function(player, card) {
  player.exchangeCash(-50)
  PROPERTIES[FREE_PARKING].pot += 50
})
functionMap.set(ACTION_BIRTHDAY, function(player, card) {
  players.forEach(function(p) {
    if (p.name !== player.name) {
      p.exchangeCash(-10)
      player.exchangeCash(10)
      console.log(p.name + " gives " + player.name + " 10 bucks")
    }
  })
})
functionMap.set(ACTION_STREET_REPAIRS, function(player, card) {
  cashOwed = (player.totalHouses * 40) + (player.totalHotels * 115)
  player.exchangeCash(cashOwed)
  PROPERTIES[FREE_PARKING].pot += cashOwed
})
functionMap.set(ACTION_FREE_PARKING, function(player, card) {
  player.exchangeCash(PROPERITES[FREE_PARKING].pot)
  PROPERITES[FREE_PARKING].pot = 0
})
functionMap.set(ACTION_PASSED_GO, function(player, card) {
  player.exchangeCash(200)
  console.log(player.name + " passed GO and collected $200")
})
functionMap.set(ACTION_GENERAL_REPAIRS, function(player, card) {
  cashOwed = (player.totalHouses * 25) + (player.totalHotels * 100)
  player.exchangeCash(cashOwed)
  PROPERTIES[FREE_PARKING].pot += cashOwed
})
functionMap.set(ACTION_SPEEDING_FINE, function(player, card) {
  player.exchangeCash(15)
  PROPERTIES[FREE_PARKING].pot += 15
})
functionMap.set(ACTION_CHAIRMAN, function(player, card) {
  players.forEach(function(p) {
    if (p.name !== player.name) {
      player.exchangeCash(-50)
      p.exchangeCash(50)
      console.log(p.name + " gives " + player.name + " 50 bucks")
    }
  })
})
functionMap.set(ACTION_GO_BACK_THREE, function(player, card) {
  player.move(-3)
  console.log(player.name + " goes back 3 spaces")
})

functionMap.set(ACTION_NEAREST_UTILITY, function(player, card) {
  let nextUtilityPos = 0
  for (let utility of UTILITY_POSITIONS) {
    if (player.position < utility) {
      nextUtilityPos = utility
      break
    }
  }
  player.moveTo(nextUtilityPos)
  console.log(player.name + " moved to " + PROPERITES[nextUtilityPos].name)
  if (PROPERTIES[nextUtilityPos].ownedBy !== null && PROPERTIES[nextUtilityPos].ownedBy !== player) {
    cashOwed = player.currentRoll * 10
    otherPlayer = PROPERTIES[nextUtilityPos].ownedBy
    otherPlayer.exchangeCash(cashOwed)
    player.exchangeCash(-cashOwed)
    console.log(player.name + " gave " + otherPlayer.name + " $" + cashOwed)
  }
})
functionMap.set(ACTION_BANK_DIVIDEND, function(player, card) {
  player.exchangeCash(50)
})
functionMap.set(ACTION_NEAREST_RAILROAD, function(player, card) {
  let nextRailroadPos = 0
  for (let railroad of RAILROAD_POSITIONS) {
    if (player.position < railroad) {
      nextRailroadPos = railroad
      break
    }
  }
  player.moveTo(nextRailroadPos)
  console.log(player.name + " moved to " + PROPERITES[nextRailroadPos].name)
  if (PROPERTIES[nextRailroadPos].ownedBy !== null && PROPERTIES[nextRailroadPos].ownedBy !== player) {
    otherPlayer = PROPERTIES[nextRailroadPos].ownedBy
    cashOwed = 10 * PROPERTIES[nextRailroadPos].railroadRent[otherPlayer.totalRailroads]
    otherPlayer.exchangeCash(cashOwed)
    player.exchangeCash(-cashOwed)
    console.log(player.name + " gave " + otherPlayer.name + " $" + cashOwed)
  }
})
functionMap.set(ACTION_POOR_TAX, function(player, card) {
  player.exchangeCash(-15)
  PROPERTIES[FREE_PARKING].pot += 15
})

class RuleManager {
  constructor(players) {
    this.players = players
  }

  static invokeMethod(method, player, card) {
    functionMap.get(method)(player, card);
  }
}