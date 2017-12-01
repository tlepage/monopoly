function Card(text, action) {
  this.text = text
  this.action = action
}

const COMMUNITY_CHEST = [
  new Card("Get out of Jail, Free. This card may be kept until needed or sold.", null),  //function(p) { p.communityChestJailCard = true; updateOwned();}),
  new Card("You have won second prize in a beauty contest. Collect $10.", null),//function() { addamount(10, 'Community Chest');}),
  new Card("From sale of stock, you get $50.", null),//function() { addamount(50, 'Community Chest');}),
  new Card("Life insurance matures. Collect $100.", null),//function() { addamount(100, 'Community Chest');}),
  new Card("Income tax refund. Collect $20.", null),//function() { addamount(20, 'Community Chest');}),
  new Card("Holiday fund matures. Receive $100.", null),//function() { addamount(100, 'Community Chest');}),
  new Card("You inherit $100.", null),//function() { addamount(100, 'Community Chest');}),
  new Card("Receive $25 consultancy fee.", null), //function() { addamount(25, 'Community Chest');}),
  new Card("Pay hospital fees of $100.", null),//function() { subtractamount(100, 'Community Chest');}),
  new Card("Bank error in your favor. Collect $200.", null),//function() { addamount(200, 'Community Chest');}),
  new Card("Pay school fees of $50.", null),//function() { subtractamount(50, 'Community Chest');}),
  new Card("Doctor's fee. Pay $50.", null),//function() { subtractamount(50, 'Community Chest');}),
  new Card("It is your birthday. Collect $10 from every player.", null),//function() { collectfromeachplayer(10, 'Community Chest');}),
  new Card("Advance to \"GO\" (Collect $200).", null),//function() { advance(0);}),
  new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", null),//function() { streetrepairs(40, 115);}),
  new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", null)//function() { gotojail();})
]

const CHANCE = [
  new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", null),
  new Card("Make General Repairs on All Your Property. For each house pay $25. For each hotel $100.", null),
  new Card("Speeding fine $15.", null),
  new Card("You have been elected chairman of the board. Pay each player $50.", null),
  new Card("Go back three spaces.", null),
  new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", null),
  new Card("Bank pays you dividend of $50.", null),
  new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", null),
  new Card("Pay poor tax of $15.", null),
  new Card("Take a trip to Reading Rail Road. If you pass \"GO\" collect $200.", null),
  new Card("ADVANCE to Boardwalk.", null),
  new Card("ADVANCE to Illinois Avenue. If you pass \"GO\" collect $200.", null),
  new Card("Your building loan matures. Collect $150.", null),
  new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", null),
  new Card("ADVANCE to St. Charles Place. If you pass \"GO\" collect $200.", null),
  new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", null)
]