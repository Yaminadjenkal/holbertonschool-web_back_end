export default function updateUniqueItems(map) {
  // Vérifiez si l'argument est bien un Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Parcourir les éléments du Map et mettre à jour les quantités égales à 1
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}

