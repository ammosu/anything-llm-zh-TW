import i18n from "@/i18n";
import { resources as languages } from "@/locales/resources";
import { useTranslation } from "react-i18next";

export function useLanguageOptions() {
  const supportedLanguages = Object.keys(languages);
  const { t } = useTranslation();

  const changeLanguage = (newLang = "en") => {
    if (!Object.keys(languages).includes(newLang)) return false;
    i18n.changeLanguage(newLang);
  };

  return {
    currentLanguage: i18n.language || "en",
    supportedLanguages,
    getLanguageName: (lang = "en") => {
      // Fallback to default Intl.DisplayNames if no translation is found
      const languageNames = new Intl.DisplayNames([i18n.language || "en"], {
        type: "language",
      });
      return t(`languages.${lang}`, { defaultValue: languageNames.of(lang) });
    },
    changeLanguage,
  };
}
