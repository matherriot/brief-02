const config = {
  ui: {
    defaultTheme: "light",

  },
  gamerule: {},
};

export default async function loadConfig() {
  console.info(`Chargement de la config..`);
  console.table(config);
  return config;
}