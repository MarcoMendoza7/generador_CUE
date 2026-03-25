export const normalizeStr = (str) => 
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

const getFirstInternalVowel = (word) => {
  const normalized = normalizeStr(word);
  const internal = normalized.slice(1); 
  const match = internal.match(/[AEIOU]/);
  return match ? match[0] : (normalized.match(/[AEIOU]/)?.[0] || 'X');
};

export const generateCUE = (data) => {
  const { nombre, paterno, materno, fecha, genero, estado, matricula } = data;

  if (!/^\d{9}$/.test(matricula)) return "Matrícula Inválida";

  const let1 = normalizeStr(paterno)[0] || "";
  const let2 = getFirstInternalVowel(paterno);
  const let3 = normalizeStr(materno)[0] || "X";
  const let4 = normalizeStr(nombre)[0] || "";

  const [year, month, day] = fecha.split('-');
  const datePart = `${year.slice(-2)}${month}${day}`;

  const lastFourSum = matricula
    .split('')
    .slice(-4)
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  return `${let1}${let2}${let3}${let4}${datePart}${genero}${estado}-${lastFourSum}`;
};