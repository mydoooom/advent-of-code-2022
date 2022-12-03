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

const rpcPoints = {
  rock: 1, paper: 2, scissors: 3
}

const scoresTotal = {
  opponent: 0, player: 0
}

const RockPaperScissorsScoreCounter = (opponentOption, playerOption) => {
  if (opponent[opponentOption] !== player[playerOption]) {
    const winningCombination = Object.values(winningCombinations).find(combination => {
      return _.isEmpty(_.xor(combination, [opponent[opponentOption], player[playerOption]]))
    })
    const winningOption = Object.keys(winningCombinations).find(key => winningCombinations[key] === winningCombination)

    opponent[opponentOption] === winningOption
    ? scoresTotal.opponent = scoresTotal.opponent + rpcPoints[opponent[opponentOption]] + 6
    : scoresTotal.opponent += rpcPoints[opponent[opponentOption]]

    player[playerOption] === winningOption
    ? scoresTotal.player = scoresTotal.player + rpcPoints[player[playerOption]] + 6
    : scoresTotal.player += rpcPoints[player[playerOption]]

  } else {
    scoresTotal.opponent = scoresTotal.opponent + rpcPoints[opponent[opponentOption]] + 3
    scoresTotal.player = scoresTotal.player + rpcPoints[player[playerOption]] + 3
  }
}

strategyList.map(round => {
  const roundArray = round.split(' ')
  RockPaperScissorsScoreCounter(roundArray[0], roundArray[1])
})

console.log(scoresTotal)
