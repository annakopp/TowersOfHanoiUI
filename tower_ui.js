(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var TowerUI =  Hanoi.TowerUI = function (game) {
    this.game = game;
    this.move = [];
  }

  TowerUI.prototype.render = function () {
    var $towersDiv = $("div#towers");
    $towersDiv.empty();
    this.game.towers.forEach(function (tower, towerIndex) {
      var $towerUl = $("<ul></ul>");
      $towerUl.attr("data-id", towerIndex);
      $towersDiv.append($towerUl);

      tower.forEach(function (disc, colIndex) {
        var $towerLi = $("<li></li>");
        $towerLi.text(disc + ' [' + colIndex + ',' + towerIndex + ']');
        $towerLi.attr("data-id", colIndex);
        $towerUl.append($towerLi);
      });
    });
  };


  TowerUI.prototype.clickHandler = function() {
    var that = this;
    // var $ul = $("ul");
    var $towersDiv = $("div#towers");

    $towersDiv.on("click", "ul", function(event) {
      var $towerUl = $(event.currentTarget);
      var towerIndex = $towerUl.attr('data-id')
      that.move.push(towerIndex);

      if (that.move.length === 2) {
        if (that.game.isValidMove(that.move[0], that.move[1])) {
          that.game.move(that.move)
          that.move = [];
          that.render();
          if (that.game.isWon()) {
            alert("You win!");
          };
        }
        else {
          alert("invalid!")
        }
      };
    });
  }
})(this);

var game = new this.Hanoi.Game()
var towerUI = new this.Hanoi.TowerUI(game);

$(document).ready(function () {
  towerUI.render();
  towerUI.clickHandler();
});