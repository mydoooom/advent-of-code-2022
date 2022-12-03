import { readFileSync } from 'fs'
import _ from 'lodash'

const strategyList = readFileSync('./day2data.txt', { encoding: 'utf-8' }).trim().split('\n')

const winningCombinations = {
  rock: ['rock', 'scissors'], paper: ['paper', 'rock'], scissors: ['scissors', 'paper']
}

const opponent = {
  A: 'rock', B: 'paper', C: 'scissors'
}

const player = {
  X: 'rock', Y: 'paper', Z: 'scissors'
}

const points = {
  rock: 1, paper: 2, scissors: 3
}

const scoresTotal = {
  opponent: 0, player: 0
}

const RockPaperScissorsScoreCounter = (opponentMove, playerMove) => {
  if (opponent[opponentMove] !== player[playerMove]) {
    const winningCombination = Object.values(winningCombinations).find(combination => {
      return _.isEmpty(_.xor(combination, [opponent[opponentMove], player[playerMove]]))
    })
    const winningMove = Object.keys(winningCombinations).find(key => winningCombinations[key] === winningCombination)

    opponent[opponentMove] === winningMove
    ? scoresTotal.opponent = scoresTotal.opponent + points[opponent[opponentMove]] + 6
    : scoresTotal.opponent += points[opponent[opponentMove]]

    player[playerMove] === winningMove
    ? scoresTotal.player = scoresTotal.player + points[player[playerMove]] + 6
    : scoresTotal.player += points[player[playerMove]]

  } else {
    scoresTotal.opponent = scoresTotal.opponent + points[opponent[opponentMove]] + 3
    scoresTotal.player = scoresTotal.player + points[player[playerMove]] + 3
  }
}

strategyList.map(round => {
  const roundArray = round.split(' ')
  RockPaperScissorsScoreCounter(roundArray[0], roundArray[1])
})

console.log(scoresTotal)
