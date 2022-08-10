import { MAN_PARTS } from './man.js'

/**
 * Desenha as partes do boneco de acordo com a quantidade de erros
 * @param {string[]} wrongLetters 
 */
const drawMan = wrongLetters => MAN_PARTS.forEach((part, index) => {
  document.querySelector(part).style.display = (index + 1) <= wrongLetters.length
    ? 'block'
    : 'none'
})

/**
 * Desenha as letras erradas que o usuário inseriu
 * @param {string[]} wrongLetters 
 */
const drawWrongLetters = wrongLetters => {
  const wrongLettersContainer = document.querySelector('.letras-erradas')
  const places = wrongLetters.map(letter => {
    const letterEl = document.createElement('span')
    letterEl.innerText = letter
    return letterEl
  })
  wrongLettersContainer.replaceChildren()
  wrongLettersContainer.append(...places)
}

/**
 * Desenha as letras corretas
 * @param {string} word 
 * @param {string[]} normalized 
 * @param {string[]} rightLetters 
 */
const drawRightLetters = (word, normalized, rightLetters) => {
  const wordContainer = document.querySelector('.palavra')
  const places = normalized.map((letter, index) => {
    const place = document.createElement('span')
    place.innerText = rightLetters.includes(letter)
      ? word[index]
      : ' '

    if (letter === ' ')
      place.classList.add('espaco')
      
    return place
  })
  wordContainer.replaceChildren()
  wordContainer.append(...places)
}

/**
 * Desenha os elementos do jogo
 * @param {string} word
 * @param {import('./game').DefaultState} state
 */
const draw = (word, state) => {
  drawMan(state.wrongLetters)
  drawWrongLetters(state.wrongLetters)
  drawRightLetters(word, state.normalized, state.rightLetters)
}

export default draw
