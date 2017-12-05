function Card(type, text, action, keep) {
  this.type = type
  this.text = text
  this.action = action
  this.keep = keep || false 
}

const COMMUNITY_CHEST = [
  new Card(COMMUNITY_DECK, "Get out of Jail, Free. This card may be kept until needed or sold.", ACTION_GET_OUT_OF_JAIL_FREE, true),
  new Card(COMMUNITY_DECK, "You have won second prize in a beauty contest. Collect $10.", ACTION_BEAUTY_CONTEST),
  new Card(COMMUNITY_DECK, "From sale of stock, you get $50.", ACTION_STOCK_SALE),
  new Card(COMMUNITY_DECK, "Life insurance matures. Collect $100.", ACTION_INSURANCE_MATURES),
  new Card(COMMUNITY_DECK, "Income tax refund. Collect $20.", ACTION_INCOME_TAX_REFUND),
  new Card(COMMUNITY_DECK, "Holiday fund matures. Receive $100.", ACTION_HOLIDAY_FUND),
  new Card(COMMUNITY_DECK, "You inherit $100.", ACTION_INHERIT),
  new Card(COMMUNITY_DECK, "Receive $25 consultancy fee.", ACTION_CONSULTANCY),
  new Card(COMMUNITY_DECK, "Pay hospital fees of $100.", ACTION_HOSPITAL_FEE),
  new Card(COMMUNITY_DECK, "Bank error in your favor. Collect $200.", ACTION_BANK_ERROR),
  new Card(COMMUNITY_DECK, "Pay school fees of $50.", ACTION_SCHOOL_FEES),
  new Card(COMMUNITY_DECK, "Doctor's fee. Pay $50.", ACTION_DOCTOR_FEE),
  new Card(COMMUNITY_DECK, "It is your birthday. Collect $10 from every player.", ACTION_BIRTHDAY),
  new Card(COMMUNITY_DECK, "Advance to \"GO\" (Collect $200).", ACTION_ADVANCE_TO_GO),
  new Card(COMMUNITY_DECK, "You are assessed for street repairs. $40 per house. $115 per hotel.", ACTION_STREET_REPAIRS),
  new Card(COMMUNITY_DECK, "Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", ACTION_GO_TO_JAIL)
]

const CHANCE = [
  new Card(CHANCE_DECK, "GET OUT OF JAIL FREE. This card may be kept until needed or traded.", ACTION_GET_OUT_OF_JAIL_FREE, true),
  new Card(CHANCE_DECK, "Make General Repairs on All Your Property. For each house pay $25. For each hotel $100.", ACTION_GENERAL_REPAIRS),
  new Card(CHANCE_DECK, "Speeding fine $15.", ACTION_SPEEDING_FINE),
  new Card(CHANCE_DECK, "You have been elected chairman of the board. Pay each player $50.", ACTION_CHAIRMAN),
  new Card(CHANCE_DECK, "Go back three spaces.", ACTION_GO_BACK_THREE),
  new Card(CHANCE_DECK, "ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", ACTION_NEAREST_UTILITY),
  new Card(CHANCE_DECK, "Bank pays you dividend of $50.", ACTION_BANK_DIVIDEND),
  new Card(CHANCE_DECK, "ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", ACTION_NEAREST_RAILROAD),
  new Card(CHANCE_DECK, "Pay poor tax of $15.", ACTION_POOR_TAX),
  new Card(CHANCE_DECK, "Take a trip to Reading Rail Road. If you pass \"GO\" collect $200.", null),
  new Card(CHANCE_DECK, "ADVANCE to Boardwalk.", null),
  new Card(CHANCE_DECK, "ADVANCE to Illinois Avenue. If you pass \"GO\" collect $200.", null),
  new Card(CHANCE_DECK, "Your building loan matures. Collect $150.", null),
  new Card(CHANCE_DECK, "ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", null),
  new Card(CHANCE_DECK, "ADVANCE to St. Charles Place. If you pass \"GO\" collect $200.", null),
  new Card(CHANCE_DECK, "Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", ACTION_GO_TO_JAIL)
]