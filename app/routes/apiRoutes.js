
var path = require("path");
var friendsData = require("../data/friends");


module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
 });

  app.post("/api/friends", function (req, res) {
    var newScore = req.body.scores;
  
    var chkDiff = 0;
    var matchIndex = 0;

    for (var i = 0; i < friendsData.length; i++) {
      var calcDiff = 0;
      for (var z = 0; z <newScore.length; z++) {
        calcDiff += Math.abs(parseInt(newScore[z] - parseInt(friendsData[i].scores[z])));
      }
  
      if (chkDiff === 0) { chkDiff = calcDiff };
      if (calcDiff < chkDiff) {
        matchIndex = i + 1;
        chkDiff = calcDiff;
      };
  }

    if (matchIndex > 0) {
      var friendMatch = friendsData[matchIndex - 1]
      res.json(friendMatch);
    }
    else {
      res.json("Sorry, we couldn't find a match");
    }

    friendsData.push(req.body);

  });

};
