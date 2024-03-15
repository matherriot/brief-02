import loadConfig from "../config/global-config.js";
import Class from "./class/index.js";

export async function preLoader(env) {
  console.group(`Chargement initial (${env})`);
  console.log(`%cChargement de Morpioned...`, 'color: #ececec; font-style: italic; background-color: #212121;padding: 2px; font-size: large;')
  await loadConfig();
  const db = new Class.Data.IndexedDb(`main_${env}`, 1)
  console.log("%cChargé !", 'color: green;')
  console.groupEnd();
}

