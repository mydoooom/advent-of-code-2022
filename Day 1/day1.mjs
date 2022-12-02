import { readFileSync } from 'fs'

const elvesCaloriesList = readFileSync('./day1data.txt', { encoding: 'utf-8' }).trim().split('\n\n')

const elfWithMostCalories = (elves) => {
  const calories = elves.map(elf => {
    return elf
      .split('\n')
      .map(Number)
      .reduce((previousValue, currentValue) => previousValue + currentValue)
  })

  return Math.max(...calories)
}

console.log(elfWithMostCalories(elvesCaloriesList))
