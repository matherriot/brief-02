/**
 * Envoie un message en tant que pop-up du navigateur et joue un son.
 * 
 * @function
 * @name send
 * @kind function
 * @param {string} message Message à afficher.
 * @param {boolean} isError Le message signale une erreur ?
 * @returns {void}
 * @exports
 */
export function send(message, isError) {
  //TODO Jouer un son de notification
  alert(message)
}