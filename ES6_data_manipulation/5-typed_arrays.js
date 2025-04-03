export default function createInt8TypedArray(length, position, value) {
  // Crée un nouvel ArrayBuffer de la longueur spécifiée
  const buffer = new ArrayBuffer(length);

  // Crée une vue DataView pour manipuler le ArrayBuffer
  const view = new DataView(buffer);

  // Vérifie si la position est valide
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Ajoute la valeur à la position spécifiée
  view.setInt8(position, value);

  return view;
}

