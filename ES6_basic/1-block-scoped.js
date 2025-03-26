export default function taskBlock(trueOrFalse) {
  const task = false; // Déclare avec const puisque la valeur reste constante
  const task2 = true; // Déclare avec const puisque la valeur reste constante

  if (trueOrFalse) {
    let task = true; // Variable limitée au bloc grâce à let
    let task2 = false; // Variable limitée au bloc grâce à let
  }

  return [task, task2]; // Renvoie les valeurs initiales définies avec const
}

