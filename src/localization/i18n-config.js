import { LanguagesSupport } from "./languages-support";

export const i18n = {
  defaultLocale: "en",
  locales: LanguagesSupport.map((e) => e.code),
};
