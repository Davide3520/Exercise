/*
Given an array of pairs representing the teams that have competed against each other and an array containing the result of each competition, write a function that returns the winner of the tournament. the input arrays are named competitions and results. The competitions array has elements in the form [homeTeam, visitors], where each team is a string of at most 30 charachters representing the name of the team. the results array contains information about the winner of each corresponding competition. Where 1 in the result array means that the home team won and 0 means the visitors won.
*/

/* TIME: O(n) where n is the number of competitions
    SPACE: O(k) where k is the number of teams;
*/

const tournament = (competitions, result) => {
  let HOME_TEAM_WON = 1;
  let beastTeam = '';
  let scores = {[beastTeam]: 0};

  for (let i = 0; i < competitions.length; i++) {
    let results = result[i];
    const [homeTeam, visitors] = competitions[i];
    const winningTeam = results === HOME_TEAM_WON ? homeTeam : visitors;

    countPoints(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[beastTeam]) {
      beastTeam = winningTeam;
    }
  }
  return beastTeam;
}

const countPoints = (team, points, scores) => {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}

console.log(tournament([
  ['HTML', 'C#'],
  ['C#', "Python"],
  ['Python', 'HTML']
], [0, 0 , 1])) // python

// console.log(tournament(
// [
// ["HTML", "Java"],
// ["Java", "Python"],
// ["Python", "HTML"],
// ["C#", "Python"],
// ["Java", "C#"],
// ["C#", "HTML"],
// ["SQL", "C#"],
// ["HTML", "SQL"],
// ["SQL", "Python"],
// ["SQL", "Java"]
// ], [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]))
