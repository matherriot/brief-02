import loadConfig from "../config/global-config.js";

export async function preLoader(env) {
  console.group(`Chargement initial (${env})`);
  console.log(`%cChargement de Morpioned...`, 'color: #ececec; font-style: italic; background-color: #212121;padding: 2px; font-size: large;')
  await loadConfig();
  console.log("%cChargé !", 'color: green;')
  console.groupEnd();
}