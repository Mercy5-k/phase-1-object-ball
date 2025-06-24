function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

console.log(gameObject());

function numPointsScored(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  let game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
}

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  let game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return Object.values(game[teamKey].players).map(player => player.number);
    }
  }
}

function playerStats(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
}

function bigShoeRebounds() {
  let game = gameObject();
  let maxShoe = 0;
  let reboundCount = 0;

  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (players[player].shoe > maxShoe) {
        maxShoe = players[player].shoe;
        reboundCount = players[player].rebounds;
      }
    }
  }

  return reboundCount;
}

function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}

function winningTeam() {
  let game = gameObject();
  let teamScores = {};

  for (let teamKey in game) {
    let team = game[teamKey];
    let totalPoints = 0;

    for (let player in team.players) {
      totalPoints += team.players[player].points;
    }

    teamScores[team.teamName] = totalPoints;
  }

  return teamScores["Brooklyn Nets"] > teamScores["Charlotte Hornets"]
    ? "Brooklyn Nets"
    : "Charlotte Hornets";
}

function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";

  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}

function doesLongNameStealATon() {
  let longest = playerWithLongestName();
  let maxSteals = 0;
  let longNameSteals = 0;

  let game = gameObject();

  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (players[player].steals > maxSteals) {
        maxSteals = players[player].steals;
      }
      if (player === longest) {
        longNameSteals = players[player].steals;
      }
    }
  }

  return longNameSteals === maxSteals;
}

