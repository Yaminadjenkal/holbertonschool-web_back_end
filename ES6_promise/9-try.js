export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction(); // Exécute la fonction mathématique
    queue.push(result); // Ajoute le résultat à la queue
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Ajoute le message d'erreur
  }
  queue.push('Guardrail was processed'); // Ajoute toujours le message final
  return queue; // Retourne la queue
}

