// Winning combination
export const winCombinations = [
  [0, 1, 2], // Horizantal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Dioganal
  [2, 4, 6]
];
/* Check winner function */
export function chekWin(currentClass, blockElements) {
  let winMatch = [];
  winCombinations.some(combination =>{
    winMatch.push(combination.every(index =>{
      return blockElements[index].classList.contains(currentClass);
    }));
  });
  return winMatch || null;
}