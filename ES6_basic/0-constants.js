export function taskFirst() {
  const task = 'I prefer const when I can.'; // Proper use of const
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Proper use of let
  combination += getLast();
  return combination;
}

