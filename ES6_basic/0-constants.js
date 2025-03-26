export function taskFirst() {
  const task = 'I prefer const when I can.'; // Utilise const car la valeur ne change pas
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Utilise let car la valeur est modifiée
  combination += getLast();

  return combination;
}

