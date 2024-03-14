/**
 * Retourne un élément DOM en fonction d'un ID. Retourne faux si inexistant.
 * 
 * @function
 * @name getElementById
 * @kind function
 * @param {string} id Identifiant de l'élément à cibler
 * @returns {false | HTMLElement | null}
 * @exports
 */
export function getElementById(id) {
  console.debug(`Récupération de l'élément DOM ayant l'identifiant "${id}"`)
  if (document.getElementById(`${id}`)) {
    console.debug(` > Succès !`)
    return document.getElementById(`${id}`);
  }
  console.error(`L'élément ayant pour id "${id}" n'as pas été trouvé !`)
  return false;
}

/**
 * Supprime un élément du DOM via son ID. Retourne faux si inexistant.
 * 
 * @function
 * @name removeElementById
 * @kind function
 * @param {string} id Identifiant de l'élément à cibler
 * @returns {boolean} Un etat de réusite.
 * @exports
 */
export function removeElementById(id) {
  if (getElementById(id)) {
    getElementById(id).remove();
    return true;
  }
  return false;
}

/**
 * Retourne un élément DOM en fonction de l'ID d'un enfant. Retourne faux si inexistant.
 * 
 * @function
 * @name getElementParentByChildId
 * @kind function
 * @param {string} childId Identifiant de l'élément enfant à cibler
 * @returns {false | HTMLElement}
 * @exports
 */
export function getElementParentByChildId(childId) {
  if (getElementById(childId)) {
    return getElementById(childId).parentElement();
  }
  return false;
}

/**
 * @function
 * @name body
 * @kind function
 * @returns {HTMLElement}
 * @exports
 */
export function body() {
  return document.body
}