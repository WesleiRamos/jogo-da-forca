import getRandomWord from './words.js'
import Game, { resetGame } from './game.js'
import { onlyLetters } from './normalize.js'
import { toggleAnimBoneco, toggleButtons } from './toggle.js'

document
  .querySelector('.status button')
  .addEventListener('click', resetGame)

document
  .querySelectorAll('.botoes button')
  .forEach(button => {
    const option = parseInt(button.getAttribute('option'))
    button.addEventListener('click', () => {
      const word = onlyLetters(
        option === 1 ? getRandomWord() : prompt('Digite a palavra:')
      )
      
      if (word === '')
        return alert('Forneça uma palavra válida')
      
      toggleButtons()
      toggleAnimBoneco(false)
      Game(word)
    })
  })