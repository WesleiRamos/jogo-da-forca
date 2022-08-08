/**
 * Carrega um arquivo da pasta assets
 * @param {string} asset 
 * @returns {Promise<string|object>}
 */
const loadAsset = async (asset, type = 'text') => {
  const request = await fetch(`./assets/${asset}`)
  return type === 'json'
    ? await request.json()
    : await request.text()
}

export default loadAsset
