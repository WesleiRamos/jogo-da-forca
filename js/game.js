import draw from './draw.js'
import { BONECO_PARTES } from './boneco.js'
import { removeAccents } from './normalize.js'
import { toggleAnimBoneco, toggleStatus, toggleButtons } from './toggle.js'

/**
 * Estado padrão do jogo
 * @typedef {object} DefaultState
 * @property {string[]} normalized Array de letras normalizadas
 * @property {string[]} rightLetters Array de letras corretas
 * @property {string[]} wrongLetters Array de letras erradas
 */

/**
 * @type {DefaultState}
 */
const DEFAULT_STATE = {
  normalized: [],
  rightLetters: [],
  wrongLetters: []
}

/**
 * Reseta o game, status, bottoes, boneco, animacao
 * tudo para o estado inicial
 */
export const resetGame = () => {
  toggleStatus()
  toggleButtons()
  toggleAnimBoneco(false)
  draw('', DEFAULT_STATE)
}

/**
 * Jogo da forca
 * @param {string} word Palavra a ser descoberta
 * @param {string} attempt Tentativa atual do usuário
 * @param {DefaultState} state Estado atual do jogo
 * @returns {void}
 */
const Game = (word, attempt = '', state = null) => {
  if (state === null) {
    return Game(word, attempt, {
      ...DEFAULT_STATE,
      normalized: removeAccents(word).split('')
    })
  }

  if (attempt.length) {
    if (state.normalized.includes(attempt)) {
      return Game(word, '', {
        ...state,
        rightLetters: [ ...state.rightLetters, attempt ],
      })
    }

    return Game(word, '', {
      ...state,
      wrongLetters: [ ...state.wrongLetters, attempt ],
    })
  }

  draw(word, state)

  if (state.wrongLetters.length === BONECO_PARTES.length) {
    toggleAnimBoneco()
    const status = toggleStatus()
    status.querySelector('h2').innerText = 'Você perdeu!'
    status.querySelector('p').innerText = `A palavra era "${word}"`
    return
  }

  if (state.normalized.every(char => state.rightLetters.includes(char) || char === ' ')) {
    const status = toggleStatus()
    status.querySelector('h2').innerText = 'Você ganhou!'
    status.querySelector('p').innerText = 'Você acertou a palavra!'
    return
  }

  const attempts = [
    ...state.rightLetters,
    ...state.wrongLetters
  ]

  window.onkeyup = event => {
    const letter = removeAccents(event.key.toLowerCase())
    if (letter.length > 1 || /[^a-z]/.test(letter) || attempts.includes(letter))
      return

    window.onkeyup = null
    return Game(word, letter, state)
  }
}

export default Game
