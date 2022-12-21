export const getRandom = (history: number[], min: number, max: number): number => {
  console.log('history', history)
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  if (!history.includes(randomNumber)) {
    return randomNumber
  }

  return getRandom(history, min, max)
}

export const incrementProgress = (counter: number, length: number): number  => {
  return length >= counter ? ++counter / length : 1
}
