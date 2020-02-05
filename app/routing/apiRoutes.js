//Require friends. 
var friends = require("../data/friends");

function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests

  app.post("/api/friends", function(req, res) {
    

//Loop through potential matches.
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    // Parse results of user's POST. 
    var userData = req.body;
    var userScores = userData.scores;

    
    var totalDifference;

    //Loop through possibilities. 
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      //Compare scores. 
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

      //Calculate the totalDifference...
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      //....and find the closest match. 
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    //Push user's info into the friends database, so they become one of the friends to compmare
    //future users' answers to. 
    friends.push(userData);

    //Return best match.
    res.json(bestMatch);
  });
};

