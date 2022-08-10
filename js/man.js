import assets from './assets.js'

/**
 * Partes do boneco na ordem correta
 */
export const MAN_PARTS = [
  '#cabeca',
  '#corpo',
  '#braco_dir',
  '#braco_esq',
  '#perna_dir',
  '#perna_esq',
]

// Carrega o svg do boneco
document.querySelector('.boneco').innerHTML = await assets('images/boneco.svg')
