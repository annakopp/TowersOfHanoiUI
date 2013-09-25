(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Game = Hanoi.Game = function () {
    this.towers = [[1, 2, 3], [], []];
  };

  Game.prototype.isWon = function () {
    // move all the discs to the last tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  };

  Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];
    console.log(startTower);
    console.log(endTower);
    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[0];
      var topEndDisc = endTower[0];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function (towerArr) {
    if (this.isValidMove(towerArr[0], towerArr[1])) {
      this.towers[towerArr[1]].unshift(this.towers[towerArr[0]].shift());
      return true;
    } else {
      return false;
    }
  };

})(this);
