function getCurrentYear() {
  const date = new Date();
  return date.getFullYear(); // Renvoie l'année en cours
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}

