export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Créer un nouveau tableau pour éviter de modifier directement l'entrée

  for (const value of array) { // Utiliser for...of pour parcourir les valeurs du tableau
    newArray.push(appendString + value); // Ajouter le résultat au nouveau tableau
  }

  return newArray; // Retourner le tableau modifié
}

