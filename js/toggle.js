/**
 * Cria uma função que alterna a visibilidade de um elemento.
 * @param {string} query Selector do elemento a ser alternado.
 * @param {string} className Classe a ser adicionada/remida do elemento.
 * @returns {(add: boolean) => void | HTMLElement} Função que alterna a visibilidade do elemento.
 */
const toggleElement = (query, className = '') => (add = true) =>{
  const element = document.querySelector(query)

  if (className) {
    return add 
      ? element.classList.add(className)
      : element.classList.remove(className)
  }

  element.style.display = element.style.display === 'none'
    ? ''
    : 'none'

  return element
}

/**
 * Alterna a visualização do status de vitória/derrota
 * @returns {HTMLElement}
 */
export const toggleStatus = toggleElement('.status')

/**
 * Alterna a animação do boneco
 * @param {boolean} anim
 */
export const toggleAnimBoneco = toggleElement('#boneco', 'perdeu')

/**
 * Alterna a visualização dos botões dos modos de jogo
 * @returns {HTMLElement}
 */
export const toggleButtons = toggleElement('.botoes')
