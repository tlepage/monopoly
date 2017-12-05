let dice = new Dice();
let communityCards = Array.from(COMMUNITY_CHEST)
let chanceCards = Array.from(CHANCE)
let properties = Array.from(PROPERTIES)

let dieRolled = false

function shuffle(a) {
  var m = a.length, t, i
  
  while(m) {
    i = Math.floor(Math.random() * m--);
    
    t = a[m]
    a[m] = a[i]
    a[i] = t
  }
  
  return a
}

function pullCard(deck) {
  card = deck.shift()
  if (!card.keep) deck.push(card)
  return card
}

function putGetOutOfJailFreeCardBack(card) {
  if (card.type === COMMUNITY_DECK) communityCards.push(card)
  else chanceCards.push(card)
}

function evaluatePosition(player) {
  card = null
  if (CHANCE_POSITIONS.includes(player.position)) {
    card = pullCard(chanceCards)
    console.log(player.name + " pulled " + card.text)
  } else if (COMMUNITY_POSITIONS.includes(player.position)) {
    card = pullCard(communityCards)
    console.log(player.name + " pulled " + card.text)
  }

  if (card != null && card.action != null) {
    RuleManager.invokeMethod(card.action, player)
  }

  if (player.position === PROPERTIES[FREE_PARKING]) {
    RuleManager.invoke(ACTION_FREE_PARKING, player)
  }
}

function passedGo() {
  let result = false
  if (player < (playerStartPos % BOARD_SQUARES)) result = true
  return result
}

d1 = document.getElementById('d1')
d2 = document.getElementById('d2')
sum = document.getElementById('sum')
p1Name = document.getElementById('p1name')
p2Name = document.getElementById('p2name')
p3Name = document.getElementById('p3name')
p4Name = document.getElementById('p4name')

p1Money = document.getElementById('p1money')
p2Money = document.getElementById('p2money')
p3Money = document.getElementById('p3money')
p4Money = document.getElementById('p4money')

p1Pos = document.getElementById('p1pos')
p2Pos = document.getElementById('p2pos')
p3Pos = document.getElementById('p3pos')
p4Pos = document.getElementById('p4pos')

pot = document.getElementById('pot')

function rollDice() {
  dice.roll()
  d1.innerText = dice.state[0]
  d2.innerText = dice.state[1]
  sum = dice.sum()
}

shuffle(communityCards);
shuffle(chanceCards);

var gameOver = false
var players = [
  new Player('Tom', 'Dog'),
  new Player('Amanda', 'Shoe'),
  new Player('Matthew', 'Egg'),
  new Player('CPU', 'Car')
]

p1Name.innerText = players[0].name
p2Name.innerText = players[1].name
p3Name.innerText = players[2].name
p4Name.innerText = players[3].name 

var playerPosElements = [
  p1Pos,
  p2Pos,
  p3Pos,
  p4Pos
]

var playerMoneyElements = [
  p1Money,
  p2Money,
  p3Money,
  p4Money
]

let ruleManager = new RuleManager(players)

let count = 0
function play() {
  for(var i = 0; i < players.length; i++) {
    rollDice()
    players[i].currentRoll = dice.sum()
    if (players[i].inJail) {
      players[i].reduceJailTurn()
      console.log(players[i].name + " is in jail. Waiting " + players[i].turnsLeftInJail + " turns...")
    } else {
      players[i].move(dice.sum())
      console.log(players[i].lastPosition, players[i].position)
      if (players[i].position < (players[i].lastPosition % BOARD_SQUARES)) {
        RuleManager.invokeMethod(ACTION_PASSED_GO, players[i])
      }
      playerPosElements[i].innerText = PROPERTIES[players[i].position].name
      console.log(players[i].name + ", Rolled: " + dice.sum() + ": " + PROPERTIES[players[i].position].name)
      evaluatePosition(players[i])
      playerMoneyElements[i].innerText = players[i].cash
    }

    pot.innerText = PROPERTIES[FREE_PARKING].pot
  }
}

for(let count = 0; count < 20; count++) {
  setTimeout(play, 200 * count)
}