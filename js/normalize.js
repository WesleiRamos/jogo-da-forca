/**
 * Normaliza a palavra removendo os seus acentos
 * @param {string} word 
 * @returns {string}
 */
export const removeAccents = word =>
  word
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC')

/**
 * Remove caracteres que n˜áo são letras ou espaço
 * @param {string} word 
 * @returns {string}
 */
export const onlyLetters = word =>
  word
    .trim()
    .normalize('NFD')
    .replace(/[^a-zA-Z\u0300-\u036f ]/g, '')
    .normalize('NFC')
    .toLowerCase()
