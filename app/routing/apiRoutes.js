var friendData = require("../data/friends");

module.exports = function(app) {

    app.post("/api/survey", function(req, res) {
        
        var friendTotal = 100;
        var closestMatch;
        var newFriend = req.body.scores
        for (var i=0;i<friendData.length;i++){
            var totalScore = 0; 
            for(var j=0;j<newFriend.length;j++){
                totalScore += Math.abs(parseInt(newFriend[j])-parseInt(friendData[i].scores[j]))
            }
            if(totalScore < friendTotal){
                friendTotal = totalScore;
                closestMatch = i;
            }
        }
        res.json(friendData[closestMatch]);        
    });
};