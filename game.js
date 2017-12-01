let dice = new Dice();
let communityCards = Array.from(COMMUNITY_CHEST)
let chanceCards = Array.from(CHANCE)
let properties = Array.from(PROPERTIES)

let freeParkingPot = 0
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
  deck.push(card)
  return card
}

//console.log(dice.sum());
d1 = document.getElementById('d1')
d2 = document.getElementById('d2')
sum = document.getElementById('sum')

d1.innerText = dice.state[0];
d2.innerText = dice.state[1];
sum.innerText = dice.sum()
dice.roll();

dice.roll();

d1.innerText = dice.state[0];
d2.innerText = dice.state[1];
sum.innerText = dice.sum()

shuffle(communityCards);
shuffle(chanceCards);

communityCards.forEach(function(card) {
  console.log(card.text);
})

console.log("\n");

chanceCards.forEach(function(card) {
  console.log(card.text);
})

console.log("\n");

console.log(pullCard(communityCards))
console.log(pullCard(chanceCards));

console.log("\n");

communityCards.forEach(function(card) {
  console.log(card.text);
})

console.log("\n");

chanceCards.forEach(function(card) {
  console.log(card.text);
})