export default function hasValuesFromArray(set, array) {
  // Vérifie si tous les éléments du tableau existent dans le Set
  return array.every((value) => set.has(value));
}

