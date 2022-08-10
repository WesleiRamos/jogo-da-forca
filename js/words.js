import assets from './assets.js'

const WORDS = await assets('words.json', 'json')

/**
 * Retorna uma palavra aleatória da lista de palavras
 * @returns {string}
 */
const getRandomWord = () => (
  WORDS[Math.floor(Math.random() * WORDS.length)]
)

export default getRandomWord
