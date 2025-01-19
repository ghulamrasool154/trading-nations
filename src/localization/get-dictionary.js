import "server-only";

const dictionaries = {
  en: () => import("./lang/en.json").then((module) => module.default),
  ar: () => import("./lang/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
