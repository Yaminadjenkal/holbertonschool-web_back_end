export default function cleanSet(set, startString) {
  // Vérification de la validité de startString
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filtrer les valeurs du Set et construire le résultat
  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

