var Dice = function() {
  this.sides = 6
  this.count = 2
  this.state = [1, 1]
  
  this.roll = function() {
    for (var i = 0; i < this.count; ++i) {
      this.state[i] = Math.floor(Math.random() * this.sides) + 1
    }
  }
  
  this.sum = function() {
    return this.state.reduce((acc, cur) => acc + cur)
  }
}